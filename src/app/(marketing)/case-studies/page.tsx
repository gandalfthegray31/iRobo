import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real-world robotics deployments: see how [Company Name] delivers operational efficiency and ROI for enterprises.",
};

const caseStudies = [
  {
    id: "retail-logistics",
    title: "Global Retail Logistics Robot Deployment",
    challenge:
      "Manual warehouse operations created bottlenecks during peak seasons, limiting throughput and increasing labor cost and error rates.",
    solution:
      "Deployment of 150 autonomous robots integrated with existing warehouse management systems (WMS) and ERP. Custom workflow orchestration and staff training ensured a smooth transition.",
    results: [
      "42% operational efficiency increase",
      "30% reduction in picking time",
      "24/7 operations enabled",
    ],
    industry: "Logistics & Warehousing",
    industryHref: "/industries#logistics",
    solutionTags: ["Warehouse robotics", "Humanoid / AMR"],
    solutionsHref: "/solutions",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Case Studies
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        See how [Company Name] helps enterprises deploy robotics and physical AI
        for measurable operational and financial results.
      </p>

      <div className="mt-16 space-y-16">
        {caseStudies.map((cs) => (
          <article
            key={cs.id}
            id={cs.id}
            className="rounded-lg border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {cs.title}
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  Challenge
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {cs.challenge}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  Solution
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {cs.solution}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  Result
                </h3>
                <ul className="mt-2 list-inside list-disc text-zinc-600 dark:text-zinc-400">
                  {cs.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link
                href={cs.industryHref}
                className="font-medium text-zinc-700 underline dark:text-zinc-300"
              >
                Industry: {cs.industry}
              </Link>
              <Link
                href={cs.solutionsHref}
                className="font-medium text-zinc-700 underline dark:text-zinc-300"
              >
                Solutions: {cs.solutionTags.join(", ")}
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <CTA href="/contact">Discuss your project</CTA>
      </div>
    </div>
  );
}
