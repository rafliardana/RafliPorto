"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  kind: "idle" | "success" | "error";
  message: string;
};

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<FormState>({ kind: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setStatus({ kind: "idle", message: "Sending your message…" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form)
      });
      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Your message could not be sent.");
      }

      form.reset();
      setStatus({
        kind: "success",
        message: "Thank you. Your message has been sent successfully."
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "A network error occurred. Please try again."
      });
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass =
    "w-full rounded-lg border bg-background/80 px-3 py-2.5 text-sm shadow-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/20";

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="access_key"
        value="3370500a-f4a6-424e-8ecc-e5da79aa245f"
      />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-left text-sm font-medium">
          Name
          <input className={fieldClass} type="text" name="name" autoComplete="name" required />
        </label>
        <label className="grid gap-1.5 text-left text-sm font-medium">
          Email
          <input className={fieldClass} type="email" name="email" autoComplete="email" required />
        </label>
      </div>
      <label className="grid gap-1.5 text-left text-sm font-medium">
        Message
        <textarea className={`${fieldClass} min-h-28 resize-y`} name="message" required />
      </label>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={submitting} className="min-w-32 gap-2 rounded-lg">
          {submitting ? (
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )}
          {submitting ? "Sending…" : "Send message"}
        </Button>
        <p
          className={
            status.kind === "error"
              ? "text-sm text-destructive"
              : status.kind === "success"
                ? "text-sm text-emerald-600 dark:text-emerald-400"
                : "text-sm text-muted-foreground"
          }
          aria-live="polite"
          role="status"
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
