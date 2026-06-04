"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      form.reset();
      setState("success");
    } catch {
      setErrorMessage("Unable to send your message. Please email us directly.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl border border-border bg-surface px-6 py-8 text-center">
        <p className="font-semibold text-navy">Thank you for reaching out.</p>
        <p className="mt-2 text-sm text-slate-600">
          We&apos;ve received your message and will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-teal focus:ring-1 focus:ring-teal"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-teal focus:ring-1 focus:ring-teal"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-y rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-teal focus:ring-1 focus:ring-teal"
        />
      </div>
      {state === "error" && errorMessage && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-lg border border-brand-green bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#166534] disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
      <p className="text-xs text-slate-500">
        Prefer email?{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-teal hover:underline">
          {siteConfig.email}
        </a>
      </p>
    </form>
  );
}
