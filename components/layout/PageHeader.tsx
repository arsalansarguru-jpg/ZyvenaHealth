import { Container } from "@/components/ui/Container";

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-surface pt-28 pb-12 sm:pt-32 sm:pb-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
