import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";

import { enquirySchema, sendEnquiry } from "@/lib/enquiry.functions";

const empty = {
  parentName: "",
  childName: "",
  childAge: "",
  program: "Abacus",
  phone: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/25";

export function EnquiryForm() {
  const submit = useServerFn(sendEnquiry);
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);

  const set = (key: keyof typeof empty) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setPending(true);
    try {
      await submit({ data: parsed.data });
      toast.success("Enquiry sent! We'll get back to you soon.");
      setValues(empty);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please call or WhatsApp us instead.");
    } finally {
      setPending(false);
    }
  }

  const Error = ({ name }: { name: string }) =>
    errors[name] ? (
      <p className="mt-1 text-xs font-bold text-destructive">{errors[name]}</p>
    ) : null;

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <div>
        <label htmlFor="parentName" className="text-sm font-bold">Parent Name</label>
        <input id="parentName" name="parentName" value={values.parentName} onChange={set("parentName")} className={fieldClass} autoComplete="name" />
        <Error name="parentName" />
      </div>

      <div>
        <label htmlFor="childName" className="text-sm font-bold">Child Name</label>
        <input id="childName" name="childName" value={values.childName} onChange={set("childName")} className={fieldClass} />
        <Error name="childName" />
      </div>

      <div>
        <label htmlFor="childAge" className="text-sm font-bold">Child Age</label>
        <input id="childAge" name="childAge" inputMode="numeric" value={values.childAge} onChange={set("childAge")} className={fieldClass} />
        <Error name="childAge" />
      </div>

      <div>
        <label htmlFor="program" className="text-sm font-bold">Program</label>
        <select id="program" name="program" value={values.program} onChange={set("program")} className={fieldClass}>
          <option value="Abacus">Abacus</option>
          <option value="Bharatanatyam">Bharatanatyam</option>
          <option value="Both">Both</option>
        </select>
        <Error name="program" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="phone" className="text-sm font-bold">Phone Number</label>
        <input id="phone" name="phone" inputMode="tel" value={values.phone} onChange={set("phone")} className={fieldClass} autoComplete="tel" />
        <Error name="phone" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-bold">Message</label>
        <textarea id="message" name="message" rows={4} value={values.message} onChange={set("message")} className={fieldClass} />
        <Error name="message" />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-primary px-6 py-3.5 font-display text-base font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
        >
          {pending ? "Sending…" : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}
