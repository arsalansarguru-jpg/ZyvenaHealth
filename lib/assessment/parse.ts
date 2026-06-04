import { getCategoryLabel } from "./theme";
import type { AssessmentResults, RiskCategory } from "./types";

const CATEGORY_ALIASES: Record<string, RiskCategory> = {
  low: "low",
  "low risk": "low",
  lowrisk: "low",
  moderate: "moderate",
  "moderate risk": "moderate",
  moderaterisk: "moderate",
  medium: "moderate",
  "medium risk": "moderate",
  high: "high",
  "high risk": "high",
  highrisk: "high",
};

function normalizeCategory(raw: string | undefined): RiskCategory | null {
  if (!raw?.trim()) return null;
  const key = raw.trim().toLowerCase().replace(/_/g, " ");
  return CATEGORY_ALIASES[key] ?? CATEGORY_ALIASES[key.replace(/\s+/g, "")] ?? null;
}

function parseScore(raw: string | undefined): number | null {
  if (!raw?.trim()) return null;
  const value = Number.parseInt(raw.trim(), 10);
  if (Number.isNaN(value) || value < 0 || value > 100) return null;
  return value;
}

function parseAreas(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];
  return raw
    .split(/[,|;]/)
    .map((area) => area.trim())
    .filter(Boolean);
}

function inferCategoryFromScore(score: number): RiskCategory {
  if (score < 34) return "low";
  if (score < 67) return "moderate";
  return "high";
}

export type SearchParamInput = Record<string, string | string[] | undefined>;

function getParam(
  params: SearchParamInput,
  keys: string[],
): string | undefined {
  for (const key of keys) {
    const value = params[key];
    if (typeof value === "string" && value.trim()) return value;
    if (Array.isArray(value) && value[0]?.trim()) return value[0];
  }
  return undefined;
}

export function parseAssessmentResults(
  params: SearchParamInput,
): AssessmentResults | null {
  const score = parseScore(
    getParam(params, ["score", "risk_score", "riskScore"]),
  );

  let category = normalizeCategory(
    getParam(params, ["category", "risk_category", "riskCategory"]),
  );

  const areas = parseAreas(
    getParam(params, ["areas", "key_risk_areas", "keyRiskAreas", "risk_areas"]),
  );

  if (score === null) return null;

  if (!category) {
    category = inferCategoryFromScore(score);
  }

  return {
    score,
    category,
    categoryLabel: getCategoryLabel(category),
    areas,
  };
}

/** Example URL for Typeform redirect configuration */
export function buildResultsUrl(
  baseUrl: string,
  results: AssessmentResults,
): string {
  const url = new URL("/results", baseUrl);
  url.searchParams.set("score", String(results.score));
  url.searchParams.set("category", results.category);
  if (results.areas.length > 0) {
    url.searchParams.set("areas", results.areas.join(","));
  }
  return url.toString();
}
