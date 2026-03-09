import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { getUpcomingTraining } from "@/content/training";

export const metadata: Metadata = {
  title: "Training Schedule",
  description:
    "Upcoming robotics and physical AI training sessions. Workforce training, technical workshops, and leadership programs from [Company Name].",
};

export default function TrainingSchedulePage() {
  const schedule = getUpcomingTraining();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Training Schedule
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Upcoming sessions. Register for an open session or request training for
        your team.
      </p>

      <div className="mt-10 overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
          <thead>
            <tr>
              <th className="py-3 pr-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Course
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Format
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Duration
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Next date
              </th>
              <th className="py-3 pl-4 text-right text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {schedule.map((item) => (
              <tr key={item.slug}>
                <td className="whitespace-nowrap py-4 pr-4 font-medium text-zinc-900 dark:text-zinc-50">
                  <Link
                    href={`/training/${item.slug}`}
                    className="hover:underline"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="whitespace-nowrap py-4 px-4 text-zinc-600 dark:text-zinc-400">
                  {item.format}
                </td>
                <td className="whitespace-nowrap py-4 px-4 text-zinc-600 dark:text-zinc-400">
                  {item.duration}
                </td>
                <td className="whitespace-nowrap py-4 px-4 text-zinc-600 dark:text-zinc-400">
                  {item.nextDate}
                </td>
                <td className="whitespace-nowrap py-4 pl-4 text-right">
                  <Link
                    href="/contact?interest=training"
                    className="text-sm font-medium text-zinc-900 underline dark:text-zinc-50"
                  >
                    Register / Request for my team
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-zinc-600 dark:text-zinc-400">
        Need custom or private training?{" "}
        <Link
          href="/contact?interest=training"
          className="font-medium text-zinc-900 underline dark:text-zinc-50"
        >
          Request custom training
        </Link>
      </p>

      <div className="mt-12">
        <CTA href="/training">Back to training overview</CTA>
      </div>
    </div>
  );
}
