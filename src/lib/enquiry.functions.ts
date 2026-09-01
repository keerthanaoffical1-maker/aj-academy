import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const enquirySchema = z.object({
  parentName: z.string().trim().min(2, "Please enter your name").max(100),
  childName: z.string().trim().min(1, "Please enter your child's name").max(100),
  childAge: z.coerce
    .number({ invalid_type_error: "Enter an age" })
    .int()
    .min(3, "Age must be between 3 and 18")
    .max(18, "Age must be between 3 and 18"),
  program: z.enum(["Abacus", "Bharatanatyam", "Both"]),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  message: z.string().trim().max(1000).optional().default(""),
});

export type EnquiryInput = z.input<typeof enquirySchema>;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export const sendEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error: dbError } = await supabaseAdmin.from("enquiries").insert({
      parent_name: data.parentName,
      child_name: data.childName,
      child_age: data.childAge,
      program: data.program,
      phone: data.phone,
      message: data.message || null,
    });

    if (dbError) {
      console.error("Failed to store enquiry", dbError.message);
    }

    const apiKey = process.env["RESEND_API_KEY"];
    let emailed = false;

    if (apiKey) {
      const html = `
        <h2>New enquiry — AJ Academy</h2>
        <p><strong>Parent:</strong> ${escapeHtml(data.parentName)}</p>
        <p><strong>Child:</strong> ${escapeHtml(data.childName)} (age ${data.childAge})</p>
        <p><strong>Program:</strong> ${escapeHtml(data.program)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(data.message || "—")}</p>
      `;

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "AJ Academy <onboarding@resend.dev>",
          to: ["ajacademy729@gmail.com"],
          subject: `New enquiry: ${data.program} — ${data.childName}`,
          html,
        }),
      });

      emailed = response.ok;
      if (!response.ok) {
        console.error("Resend error", response.status, await response.text());
      }
    }

    if (dbError && !emailed) {
      throw new Error("Could not send your enquiry. Please call or message us.");
    }

    return { ok: true as const, emailed };
  });
