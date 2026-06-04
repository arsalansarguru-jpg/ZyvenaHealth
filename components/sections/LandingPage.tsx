import { CalendlyEmbed } from "@/components/embeds/CalendlyEmbed";
import { TypeformEmbed } from "@/components/embeds/TypeformEmbed";
import { HeroIllustration } from "@/components/HeroIllustration";
import { FaqSection } from "@/components/sections/FaqSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  audience,
  features,
  heroBenefits,
  medicalDisclaimer,
  problems,
  steps,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-brand-green"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function LandingPage() {
  return (
    <>
      <section className="bg-surface pt-28 pb-14 sm:pt-32 sm:pb-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal sm:text-sm">
                {siteConfig.tagline}
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
                Understand Your Metabolic Health Before It Becomes a Problem
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Fatigue, weight gain, poor sleep, low energy, and metabolic dysfunction often develop silently.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                Take Zyvena&apos;s free metabolic health assessment and discover your personalized risk profile.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/#assessment">Take Free Assessment</Button>
                <Button href="/#consultation" variant="outline">
                  Book a Metabolic Review
                </Button>
              </div>
              <ul className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {heroBenefits.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <HeroIllustration />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
              Why So Many People Feel Unhealthy Despite Trying Everything
            </h2>
            <p className="mt-5 text-base text-slate-600 sm:text-lg">Many people struggle with:</p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-4 text-sm font-medium text-navy"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 max-w-2xl">
            <p className="text-lg text-slate-600">Most solutions offer generic advice.</p>
            <p className="mt-4 text-xl font-semibold leading-snug text-navy sm:text-2xl">
              Your body is unique. Your health strategy should be too.
            </p>
          </div>
        </Container>
      </section>

      <section id="how-it-works" className="bg-surface py-16 sm:py-24">
        <Container>
          <SectionHeading title="How Zyvena Works" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <Card key={step.title}>
                <span className="text-3xl font-bold text-teal/25">{step.step}</span>
                <h3 className="mt-3 text-base font-semibold text-navy sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" className="bg-white py-16 sm:py-24">
        <Container>
          <SectionHeading title="A Smarter Approach To Metabolic Health" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-surface/60">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <span className="text-lg font-semibold" aria-hidden>
                    ✓
                  </span>
                </div>
                <h3 className="text-base font-semibold text-navy sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white sm:py-24">
        <Container>
          <SectionHeading
            title="Who Benefits From Zyvena"
            subtitle="Structured support for people seeking clarity on metabolic health."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-base font-semibold sm:text-lg">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
              Built Around Medical Oversight
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Zyvena is designed around structured assessments, evidence-based recommendations, and professional review.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We focus on helping individuals better understand their metabolic health and make informed decisions about lifestyle improvement.
            </p>
            <p className="mt-10 border-t border-border pt-8 text-sm leading-relaxed text-slate-500">
              {medicalDisclaimer}
            </p>
          </div>
        </Container>
      </section>

      <section id="assessment" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <Container>
          <SectionHeading
            title="Take The First Step Toward Understanding Your Health"
            subtitle="Complete your free assessment in less than 5 minutes."
          />
          <TypeformEmbed />
          <div className="mt-8 flex justify-center">
            <Button href="/#assessment">Start Free Assessment</Button>
          </div>
        </Container>
      </section>

      <section id="consultation" className="scroll-mt-24 bg-surface py-16 sm:py-24">
        <Container>
          <SectionHeading
            title="Book a Metabolic Review"
            subtitle="Schedule a consultation to discuss your assessment and next steps."
          />
          <CalendlyEmbed />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/#consultation" variant="secondary">
              Book Consultation
            </Button>
            <Button href="/#assessment" variant="outline">
              Take Free Assessment
            </Button>
          </div>
        </Container>
      </section>

      <FaqSection />

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
              Your Health Deserves More Than Generic Advice
            </h2>
            <div className="mt-8">
              <Button href="/#assessment">Take Free Assessment</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
