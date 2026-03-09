import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { trainingOfferings } from "@/content/training";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Upskill your team for the physical AI era. Workforce robotics training, technical integration workshops, and leadership strategy from [Company Name].",
};

export default function TrainingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Education & Training
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        Upskill your team for the physical AI era. [Company Name] offers
        workforce training, technical integration workshops, and leadership
        strategy programs so you can deploy and operate robotics with
        confidence.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <CTA href="/training/schedule">View schedule</CTA>
        <CTA href="/contact" variant="outline">
          Contact us
        </CTA>
      </div>

      <div className="mt-16 space-y-12">
        {trainingOfferings.map((offering) => (
          <section
            key={offering.slug}
            className="rounded-lg border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {offering.title}
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              {offering.description}
            </p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {offering.duration} · {offering.format} · {offering.audience}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={`/training/${offering.slug}`}
                className="font-medium text-zinc-900 underline dark:text-zinc-50"
              >
                Course details →
              </Link>
              <Link
                href="/training/schedule"
                className="font-medium text-zinc-700 underline dark:text-zinc-300"
              >
                View schedule
              </Link>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-zinc-900 p-8 dark:bg-zinc-950">
        <h2 className="text-xl font-bold text-white">
          Request custom training
        </h2>
        <p className="mt-2 text-zinc-300">
          Need a program tailored to your site, systems, or team? We can design
          onsite or virtual training around your workflows and technology.
        </p>
        <CTA href="/contact?interest=training" variant="secondary">
          Get in touch
        </CTA>
      </div>
    </div>
  );
}
