import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Zyvena Health for questions about assessments, consultations, or partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="We're here to help with questions about assessments, consultations, and general inquiries."
      />
      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Card>
              <h2 className="text-lg font-semibold text-navy">General inquiries</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                For questions about our services, partnerships, or media requests, email our team directly.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 inline-block text-sm font-semibold text-teal hover:underline"
              >
                {siteConfig.email}
              </a>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold text-navy">Start your assessment</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Complete the free metabolic health assessment to receive your personalized risk profile.
              </p>
              <div className="mt-5">
                <Button href="/#assessment">Take Free Assessment</Button>
              </div>
            </Card>

            <Card className="md:col-span-2">
              <h2 className="text-lg font-semibold text-navy">Book a consultation</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Ready to discuss your results? Schedule a metabolic review with our team on the homepage.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href="/#consultation" variant="secondary">
                  Book Consultation
                </Button>
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-teal"
                >
                  Return to homepage
                </Link>
              </div>
            </Card>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-slate-500">
            Zyvena does not provide emergency medical services. If you are experiencing a medical emergency, call your local emergency number immediately.
          </p>
        </Container>
      </section>
    </>
  );
}
