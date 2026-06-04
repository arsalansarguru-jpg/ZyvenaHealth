export const siteConfig = {
  name: "Zyvena Health",
  tagline: "Metabolic Health. Personalized Care.",
  description:
    "Understand your metabolic health before it becomes a problem. Free assessment, doctor-led guidance, and biomarker-based insights.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zyvenahealth.com",
  email: "hello@zyvenahealth.com",
  typeformId: process.env.NEXT_PUBLIC_TYPEFORM_ID ?? "",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
} as const;

export const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Assessment", href: "/#assessment" },
] as const;

export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Contact", href: "/contact" },
] as const;
