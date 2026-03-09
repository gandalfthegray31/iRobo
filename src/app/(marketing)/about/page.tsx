import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "[Company Name] is a global robotics systems integration company helping organizations deploy physical AI solutions into real-world environments.",
};

const regions = [
  "North America",
  "Europe",
  "Middle East",
  "Africa",
  "Australia",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        About [Company Name]
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
        [Company Name] is a global <strong>robotics systems integration company</strong> helping
        organizations deploy physical AI solutions into real-world environments.
      </p>
      <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
        Our mission is to accelerate the adoption of robotics technologies that
        increase productivity, safety, and operational intelligence.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        What We Specialize In
      </h2>
      <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
        <li>Robotics system architecture</li>
        <li>Enterprise robotics integration</li>
        <li>Humanoid robotics deployment</li>
        <li>AI-powered automation</li>
        <li>Robotics fleet management</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Where We Operate
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        We support global robotics deployments across distributed operations.
      </p>
      <ul className="mt-4 flex flex-wrap gap-3">
        {regions.map((region) => (
          <li
            key={region}
            className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {region}
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Our Team
      </h2>
      <p className="mt-2 max-w-3xl text-zinc-600 dark:text-zinc-400">
        Our engineers and consultants bring deep experience from manufacturing,
        logistics, and AI. We combine vendor-neutral technology selection with
        enterprise-grade integration so your robotics investments deliver
        measurable ROI.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <CTA href="/training">
          Explore training for your team
        </CTA>
        <CTA href="/contact" variant="outline">
          Get in touch
        </CTA>
      </div>
    </div>
  );
}
