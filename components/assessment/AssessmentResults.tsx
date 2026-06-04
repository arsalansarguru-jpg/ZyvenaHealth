import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import {
  CALENDLY_BOOKING_URL,
  MEDICAL_DISCLAIMER,
  WHAT_THIS_MEANS,
} from "@/lib/assessment/content";
import { getRiskTheme } from "@/lib/assessment/theme";
import type { AssessmentResults } from "@/lib/assessment/types";
import { ResultsFaq } from "./ResultsFaq";

type AssessmentResultsProps = {
  results: AssessmentResults;
};

function ScoreRing({
  score,
  ringClass,
  textClass,
}: {
  score: number;
  ringClass: string;
  textClass: string;
}) {
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative mx-auto h-36 w-36 sm:h-40 sm:w-40">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120" aria-hidden>
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          className={ringClass}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-bold sm:text-4xl ${textClass}`}>{score}</span>
        <span className="text-xs font-medium text-slate-500">Risk Score</span>
      </div>
    </div>
  );
}

export function AssessmentResultsView({ results }: AssessmentResultsProps) {
  const theme = getRiskTheme(results.category);
  const meaning = WHAT_THIS_MEANS[results.category];

  return (
    <>
      <section className={`border-b border-border bg-white pt-28 pb-12 sm:pt-32 sm:pb-16`}>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal">
              Assessment Complete
            </p>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Your Metabolic Health Risk Profile
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Based on your responses, here is a summary of your current metabolic risk patterns.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2 md:items-center">
            <Card className={`text-center ${theme.border}`}>
              <p className="text-sm font-medium text-slate-600">Risk Category</p>
              <p
                className={`mt-3 inline-flex rounded-full border px-4 py-1.5 text-lg font-semibold ${theme.badge} ${theme.badgeText}`}
              >
                {results.categoryLabel}
              </p>
              <div className="mt-8">
                <ScoreRing
                  score={results.score}
                  ringClass={theme.scoreRing}
                  textClass={theme.scoreText}
                />
              </div>
            </Card>

            <Card className={theme.accent}>
              <h2 className="text-lg font-semibold text-navy">Summary</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {meaning.summary}
              </p>
              <ul className="mt-6 space-y-2">
                {meaning.recommendations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {results.areas.length > 0 && (
        <section className="bg-surface py-14 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
                Key Areas Identified
              </h2>
              <p className="mt-3 text-center text-sm text-slate-600 sm:text-base">
                These patterns may benefit from further review during your metabolic consultation.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {results.areas.map((area) => (
                  <li
                    key={area}
                    className={`rounded-xl border bg-white px-5 py-4 text-sm font-medium text-navy ${theme.border}`}
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              What This Means
            </h2>
            <div className={`mt-8 rounded-2xl border p-6 sm:p-8 ${theme.border} ${theme.accent}`}>
              {meaning.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-slate-700 sm:text-base [&+&]:mt-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-navy py-14 text-white sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Discuss Your Results With Our Team
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Book a metabolic review to review your risk profile, clarify priorities, and understand your next steps.
            </p>
            <div className="mt-8">
              <Button
                href={CALENDLY_BOOKING_URL}
                external
                className="!border-brand-green !bg-brand-green hover:!bg-[#166534]"
              >
                Book Your Metabolic Review
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-400">30-minute consultation · No login required</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
            {MEDICAL_DISCLAIMER}
          </p>
        </Container>
      </section>

      <ResultsFaq />

      <section className="bg-surface py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-xl font-bold text-navy sm:text-2xl">
              Ready to take the next step?
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Schedule your metabolic review and turn your assessment into a clear action plan.
            </p>
            <div className="mt-6">
              <Button href={CALENDLY_BOOKING_URL} external>
                Book Your Metabolic Review
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
