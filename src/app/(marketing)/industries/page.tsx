import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Logistics, manufacturing, retail, healthcare, and energy: [Company Name] transforms operations with physical AI and robotics.",
};

const industries = [
  {
    id: "logistics",
    name: "Logistics & Warehousing",
    summary:
      "From distribution centers to last-mile hubs, we deploy autonomous material handling, robotic picking, and AI-driven inventory systems.",
    applications: [
      "Autonomous material handling",
      "Robotic picking systems",
      "Warehouse drones",
      "AI inventory inspection",
    ],
    solutionsHref: "/solutions#warehouse",
    caseStudyHref: "/case-studies#retail-logistics",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    summary:
      "Robotic assembly, inspection, and predictive maintenance reduce downtime and improve quality on the factory floor.",
    applications: [
      "Robotic assembly lines",
      "Inspection robots",
      "Predictive maintenance robotics",
    ],
    solutionsHref: "/solutions",
    caseStudyHref: null,
  },
  {
    id: "retail",
    name: "Retail & Hospitality",
    summary:
      "Service robots, autonomous cleaning, and customer-assistance robotics enhance efficiency and experience in stores and venues.",
    applications: [
      "Service robots",
      "Autonomous cleaning robots",
      "Customer assistance robotics",
    ],
    solutionsHref: "/solutions",
    caseStudyHref: "/case-studies#retail-logistics",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    summary:
      "Hospital automation, robotic logistics, and medical support robots help staff focus on patient care while maintaining safety and compliance.",
    applications: [
      "Robotic logistics",
      "Hospital automation",
      "Medical support robots",
    ],
    solutionsHref: "/solutions",
    caseStudyHref: null,
  },
  {
    id: "energy",
    name: "Energy & Infrastructure",
    summary:
      "Inspection drones, pipeline robots, and hazardous-environment robotics keep assets and people safe while reducing cost and risk.",
    applications: [
      "Inspection drones",
      "Pipeline robots",
      "Hazardous environment robotics",
    ],
    solutionsHref: "/solutions",
    caseStudyHref: null,
  },
];

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Industries We Transform
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        We help organizations across logistics, manufacturing, retail,
        healthcare, and energy deploy physical AI and robotics that deliver
        measurable ROI.
      </p>

      <div className="mt-16 space-y-14">
        {industries.map((ind) => (
          <section
            key={ind.id}
            id={ind.id}
            className="rounded-lg border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {ind.name}
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              {ind.summary}
            </p>
            <h3 className="mt-4 font-semibold text-zinc-900 dark:text-zinc-50">
              Key applications
            </h3>
            <ul className="mt-2 list-inside list-disc text-zinc-600 dark:text-zinc-400">
              {ind.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={ind.solutionsHref}
                className="font-medium text-zinc-900 underline dark:text-zinc-50"
              >
                Related solutions →
              </Link>
              {ind.caseStudyHref && (
                <Link
                  href={ind.caseStudyHref}
                  className="font-medium text-zinc-700 underline dark:text-zinc-300"
                >
                  Case study →
                </Link>
              )}
              <Link
                href="/training"
                className="font-medium text-zinc-700 dark:text-zinc-300"
              >
                Explore training →
              </Link>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16">
        <CTA href="/contact">Discuss your industry</CTA>
      </div>
    </div>
  );
}
