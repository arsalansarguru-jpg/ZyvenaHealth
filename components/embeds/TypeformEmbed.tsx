import { siteConfig } from "@/lib/site";

type TypeformEmbedProps = {
  className?: string;
};

export function TypeformEmbed({ className = "" }: TypeformEmbedProps) {
  const { typeformId } = siteConfig;

  if (typeformId) {
    return (
      <div className={className}>
        <iframe
          title="Zyvena Health Assessment"
          src={`https://form.typeform.com/to/${typeformId}?typeform-embed=embed-widget`}
          className="min-h-[600px] h-[75vh] w-full rounded-xl border border-border bg-white"
          allow="camera; microphone; autoplay; encrypted-media; fullscreen"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-[480px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface px-6 text-center ${className}`}
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">
        Typeform embed
      </p>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
        Add your Typeform ID to{" "}
        <code className="rounded bg-white px-1.5 py-0.5 text-xs text-navy">
          NEXT_PUBLIC_TYPEFORM_ID
        </code>{" "}
        to display the live assessment form here.
      </p>
      <p className="mt-4 text-xs text-slate-500">
        Example: NEXT_PUBLIC_TYPEFORM_ID=abc123xyz
      </p>
    </div>
  );
}
