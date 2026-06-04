import type { Metadata } from "next";
import { AssessmentResultsView } from "@/components/assessment/AssessmentResults";
import { ResultsEmpty } from "@/components/assessment/ResultsEmpty";
import { parseAssessmentResults } from "@/lib/assessment/parse";

export const metadata: Metadata = {
  title: "Your Assessment Results",
  description:
    "View your personalized metabolic health risk profile and book a metabolic review with Zyvena Health.",
  robots: { index: false, follow: false },
};

type ResultsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ResultsPage({ searchParams }: ResultsPageProps) {
  const params = await searchParams;
  const results = parseAssessmentResults(params);

  if (!results) {
    return <ResultsEmpty />;
  }

  return <AssessmentResultsView results={results} />;
}
