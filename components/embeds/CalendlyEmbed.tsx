import { siteConfig } from "@/lib/site";

type CalendlyEmbedProps = {
  className?: string;
};

export function CalendlyEmbed({ className = "" }: CalendlyEmbedProps) {
  const { calendlyUrl } = siteConfig;

  if (calendlyUrl) {
    return (
      <div className={className}>
        <iframe
          title="Book a Metabolic Review"
          src={`${calendlyUrl}${calendlyUrl.includes("?") ? "&" : "?"}hide_gdpr_banner=1`}
          className="min-h-[700px] h-[80vh] w-full rounded-xl border border-border bg-white"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-[520px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface px-6 text-center ${className}`}
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">
        Calendly embed
      </p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
        Add your scheduling URL to{" "}
        <code className="rounded bg-white px-1.5 py-0.5 text-xs text-navy">
          NEXT_PUBLIC_CALENDLY_URL
        </code>{" "}
        to display the booking widget here.
      </p>
      <p className="mt-4 text-xs text-slate-500">
        Example: NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-team/metabolic-review
      </p>
    </div>
  );
}
