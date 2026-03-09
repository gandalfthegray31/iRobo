import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Humanoid robotics, autonomous drones, and warehouse robotics solutions from [Company Name]. End-to-end deployment and integration.",
};

const solutions = [
  {
    id: "humanoid",
    title: "Humanoid Robotics Deployment",
    description:
      "Deploy humanoid robots into operational environments for tasks that benefit from a human-like form factor and mobility.",
    applications: [
      "Warehouse operations and material handling",
      "Inspection and monitoring",
      "Material transport and logistics support",
      "Support roles in manufacturing and retail",
    ],
    benefits: [
      "Flexibility in unstructured environments",
      "Reduced need for facility redesign",
      "Human-robot collaboration where needed",
    ],
    caseStudyRef: "Global Retail Logistics",
    caseStudyHref: "/case-studies#retail-logistics",
  },
  {
    id: "drones",
    title: "Autonomous Drone Systems",
    description:
      "Drone deployments for inspection, monitoring, and automation across infrastructure and industrial sites.",
    applications: [
      "Infrastructure and asset inspections",
      "Security and perimeter monitoring",
      "Agriculture and land management",
      "Emergency response and mapping",
    ],
    benefits: [
      "Rapid deployment and scalability",
      "Access to hard-to-reach areas",
      "Data-rich imaging and analytics",
    ],
    caseStudyRef: null,
    caseStudyHref: null,
  },
  {
    id: "warehouse",
    title: "Warehouse Robotics",
    description:
      "Autonomous mobile robots, robotic picking, sorting systems, and fleet orchestration for modern warehouses.",
    applications: [
      "Autonomous mobile robots (AMR) for material movement",
      "Robotic picking and palletizing",
      "Sortation and conveyor integration",
      "Fleet orchestration with WMS/ERP",
    ],
    benefits: [
      "Higher throughput and accuracy",
      "24/7 operations with consistent performance",
      "Scalable with demand",
    ],
    caseStudyRef: "Global Retail Logistics",
    caseStudyHref: "/case-studies#retail-logistics",
  },
];

export default function SolutionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Solutions
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        [Company Name] designs and deploys robotics solutions across humanoid,
        drone, and warehouse automation. Each solution is tailored to your
        operations and integrated with your existing systems.
      </p>

      <div className="mt-16 space-y-16">
        {solutions.map((sol, i) => (
          <section
            key={sol.title}
            id={sol.id}
            className="border-b border-zinc-200 pb-16 last:border-0 dark:border-zinc-800"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {sol.title}
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              {sol.description}
            </p>
            {sol.id === "humanoid" && (
              <div className="mt-6 overflow-hidden rounded-lg">
                <img
                  src="https://owebsite-cdn.ubtrobot.com/resources/image/2025/07/17/698770322690117.jpg"
                  alt="UBTECH Walker S2 industrial humanoid robot"
                  className="h-72 w-full object-cover object-center"
                />
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                  Platforms we integrate: UBTECH Walker S2 and other leading
                  humanoids.
                </p>
              </div>
            )}
            <h3 className="mt-6 font-semibold text-zinc-900 dark:text-zinc-50">
              Applications
            </h3>
            <ul className="mt-2 list-inside list-disc text-zinc-600 dark:text-zinc-400">
              {sol.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-semibold text-zinc-900 dark:text-zinc-50">
              Benefits
            </h3>
            <ul className="mt-2 list-inside list-disc text-zinc-600 dark:text-zinc-400">
              {sol.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {sol.caseStudyHref && (
              <p className="mt-6">
                <Link
                  href={sol.caseStudyHref}
                  className="font-medium text-zinc-900 underline dark:text-zinc-50"
                >
                  Read case study: {sol.caseStudyRef} →
                </Link>
              </p>
            )}
            <p className="mt-4">
              <Link
                href="/training"
                className="font-medium text-zinc-700 dark:text-zinc-300"
              >
                Train your team for this solution →
              </Link>
            </p>
          </section>
        ))}
      </div>

      <div className="mt-16">
        <CTA href="/contact">Talk to a Robotics Architect</CTA>
      </div>
    </div>
  );
}
