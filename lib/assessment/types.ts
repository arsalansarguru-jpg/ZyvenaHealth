export type RiskCategory = "low" | "moderate" | "high";

export type AssessmentResults = {
  score: number;
  category: RiskCategory;
  categoryLabel: string;
  areas: string[];
};

export type RiskTheme = {
  label: string;
  scoreRing: string;
  scoreText: string;
  badge: string;
  badgeText: string;
  border: string;
  accent: string;
  dot: string;
};
