import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Zyvena Health collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Last updated: June 2026. This policy explains how we handle your information."
      />
      <section className="py-12 sm:py-16">
        <Container>
          <div className="prose-legal mx-auto max-w-3xl">
            <p>
              Zyvena Health (&quot;Zyvena,&quot; &quot;we,&quot; &quot;us&quot;) respects your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you visit our website or use our assessment and consultation services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information you provide directly, including:</p>
            <ul>
              <li>Contact details (name, email address, phone number)</li>
              <li>Health-related responses submitted through assessments or forms</li>
              <li>Scheduling and consultation preferences</li>
              <li>Communications you send to us</li>
            </ul>
            <p>
              We may also collect technical data such as browser type, device information, IP address, and usage data through cookies or similar technologies to improve site performance and security.
            </p>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To provide and improve our educational assessment services</li>
              <li>To schedule consultations and respond to inquiries</li>
              <li>To communicate important service updates</li>
              <li>To maintain security, prevent fraud, and comply with legal obligations</li>
            </ul>

            <h2>Health Information</h2>
            <p>
              Information you submit may include health-related details. Zyvena provides educational assessments and is not a substitute for emergency or diagnostic medical care. We apply reasonable administrative and technical safeguards to protect sensitive information.
            </p>

            <h2>Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share information with trusted service providers (such as form, scheduling, email, or hosting providers) who process data on our behalf under contractual obligations. We may disclose information if required by law or to protect rights and safety.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain information only as long as necessary for the purposes described in this policy, unless a longer retention period is required by law.
            </p>

            <h2>Your Choices</h2>
            <p>
              You may request access, correction, or deletion of your personal information where applicable by contacting us at hello@zyvenahealth.com. You may opt out of non-essential communications at any time.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Material changes will be reflected on this page with an updated effective date.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy-related questions, contact{" "}
              <a href="mailto:hello@zyvenahealth.com" className="text-teal hover:underline">
                hello@zyvenahealth.com
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
