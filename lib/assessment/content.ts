import type { RiskCategory } from "./types";

export const WHAT_THIS_MEANS: Record<
  RiskCategory,
  { summary: string; paragraphs: string[]; recommendations: string[] }
> = {
  low: {
    summary:
      "Your responses suggest a lower pattern of metabolic risk at this time. Maintaining healthy habits remains important.",
    paragraphs: [
      "A low-risk profile does not mean health concerns are absent. Metabolic health can change with stress, sleep, nutrition, and activity levels over time.",
      "This assessment highlights areas to monitor so you can stay proactive rather than reactive about your wellbeing.",
    ],
    recommendations: [
      "Continue consistent sleep and nutrition routines",
      "Schedule periodic check-ins to track changes over time",
      "Discuss preventive strategies during a metabolic review",
    ],
  },
  moderate: {
    summary:
      "Your responses indicate several metabolic patterns that may benefit from closer attention and a more structured plan.",
    paragraphs: [
      "A moderate-risk profile often reflects a combination of lifestyle factors, symptoms, and potential early metabolic stress signals.",
      "Addressing these patterns early can help reduce the likelihood of progression and support better energy, weight management, and long-term health outcomes.",
    ],
    recommendations: [
      "Review your key risk areas with a healthcare professional",
      "Prioritize sleep quality, stress management, and balanced nutrition",
      "Book a metabolic review to discuss personalized next steps",
    ],
  },
  high: {
    summary:
      "Your responses suggest multiple metabolic risk patterns that warrant timely review and a personalized action plan.",
    paragraphs: [
      "A higher-risk profile does not confirm a medical diagnosis. It indicates that several factors in your assessment may benefit from professional interpretation and follow-up.",
      "Early consultation can help clarify priorities, identify appropriate testing if needed, and build a structured plan aligned with your health goals.",
    ],
    recommendations: [
      "Book a metabolic review to discuss your results in detail",
      "Bring a summary of symptoms, lifestyle factors, and family history",
      "Follow evidence-based guidance from qualified healthcare professionals",
    ],
  },
};

export const RESULTS_FAQS = [
  {
    question: "Is this a medical diagnosis?",
    answer:
      "No. Your assessment results are educational and designed to highlight potential metabolic risk patterns. Only a qualified healthcare provider can provide a diagnosis.",
  },
  {
    question: "Why should I book a metabolic review?",
    answer:
      "A metabolic review helps translate your assessment into clear priorities, lifestyle guidance, and informed next steps tailored to your profile.",
  },
  {
    question: "How was my risk score calculated?",
    answer:
      "Your score is based on patterns identified from your assessment responses, including symptoms, lifestyle factors, and reported health concerns.",
  },
  {
    question: "Can my risk category change over time?",
    answer:
      "Yes. Metabolic health is dynamic. Lifestyle changes, stress, sleep, nutrition, and medical guidance can influence your risk profile over time.",
  },
] as const;

export const MEDICAL_DISCLAIMER =
  "Zyvena does not provide emergency medical services. Assessment results are educational and should not be considered a medical diagnosis. Always consult a qualified healthcare professional for medical advice, diagnosis, or treatment.";

export const CALENDLY_BOOKING_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/zyvenahealth/30min";
