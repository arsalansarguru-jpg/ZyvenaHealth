import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing use of the Zyvena Health website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        description="Last updated: June 2026. Please read these terms before using our services."
      />
      <section className="py-12 sm:py-16">
        <Container>
          <div className="prose-legal mx-auto max-w-3xl">
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the Zyvena Health website and related services. By using our website or services, you agree to these Terms.
            </p>

            <h2>Educational Purpose</h2>
            <p>
              Zyvena provides educational health assessments and informational resources. Our services do not constitute medical diagnosis, treatment, or emergency care. Always seek the advice of a qualified healthcare provider for medical concerns.
            </p>

            <h2>Eligibility</h2>
            <p>
              You must be at least 18 years old and capable of entering a binding agreement to use our services.
            </p>

            <h2>Account and Submissions</h2>
            <p>
              You agree to provide accurate information when completing assessments or scheduling consultations. You are responsible for maintaining the confidentiality of any credentials associated with your use of our services.
            </p>

            <h2>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website for unlawful or harmful purposes</li>
              <li>Attempt to disrupt, damage, or gain unauthorized access to our systems</li>
              <li>Misrepresent your identity or health information</li>
              <li>Reproduce or distribute our content without permission</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content, branding, and materials on this website are owned by Zyvena Health or its licensors and are protected by applicable intellectual property laws.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party tools for forms, scheduling, analytics, or communications. Your use of those services may be subject to separate third-party terms and privacy policies.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              The website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express or implied, including fitness for a particular purpose or non-infringement.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Zyvena Health shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Zyvena Health from claims arising out of your misuse of the website or violation of these Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by applicable laws in the jurisdiction where Zyvena Health operates, without regard to conflict-of-law principles.
            </p>

            <h2>Changes</h2>
            <p>
              We may modify these Terms at any time. Continued use of the website after changes constitutes acceptance of the revised Terms.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these Terms may be sent to{" "}
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
