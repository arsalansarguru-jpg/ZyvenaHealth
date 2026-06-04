import type { AssessmentResults, RiskCategory, RiskTheme } from "./types";

export const RISK_CATEGORY_LABELS: Record<RiskCategory, string> = {
  low: "Low Risk",
  moderate: "Moderate Risk",
  high: "High Risk",
};

export const RISK_THEMES: Record<RiskCategory, RiskTheme> = {
  low: {
    label: "Low Risk",
    scoreRing: "stroke-brand-green",
    scoreText: "text-brand-green",
    badge: "bg-green-50 border-green-200",
    badgeText: "text-green-800",
    border: "border-green-200",
    accent: "bg-green-50",
    dot: "bg-brand-green",
  },
  moderate: {
    label: "Moderate Risk",
    scoreRing: "stroke-amber-500",
    scoreText: "text-amber-700",
    badge: "bg-amber-50 border-amber-200",
    badgeText: "text-amber-900",
    border: "border-amber-200",
    accent: "bg-amber-50",
    dot: "bg-amber-500",
  },
  high: {
    label: "High Risk",
    scoreRing: "stroke-red-600",
    scoreText: "text-red-700",
    badge: "bg-red-50 border-red-200",
    badgeText: "text-red-900",
    border: "border-red-200",
    accent: "bg-red-50",
    dot: "bg-red-600",
  },
};

export function getRiskTheme(category: RiskCategory): RiskTheme {
  return RISK_THEMES[category];
}

export function getCategoryLabel(category: RiskCategory): string {
  return RISK_CATEGORY_LABELS[category];
}
