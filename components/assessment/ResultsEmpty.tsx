import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ResultsEmpty() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal">
            Assessment Results
          </p>
          <h1 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
            Complete your assessment first
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Your personalized results appear here after you finish the metabolic health assessment.
          </p>
          <div className="mt-8">
            <Button href="/#assessment">Take Free Assessment</Button>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Preview:{" "}
            <Link href="/results?score=72&category=moderate&areas=Constant+fatigue,Poor+sleep,Weight+management" className="text-teal hover:underline">
              sample results page
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
