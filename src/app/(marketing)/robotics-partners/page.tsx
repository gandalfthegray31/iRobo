import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Robotics Partners",
  description:
    "[Company Name] works with the world's leading robotics manufacturers including Boston Dynamics, DJI, FANUC, and more. Vendor-neutral integration.",
};

const partners = [
  "Boston Dynamics",
  "UBTech Robotics",
  "DJI",
  "Agility Robotics",
  "Unitree Robotics",
  "FANUC",
  "KUKA",
  "ABB Robotics",
];

export default function RoboticsPartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Working with the World&apos;s Leading Robotics Manufacturers
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        We maintain partnerships and integration experience with many of the
        world&apos;s leading robotics manufacturers. These relationships allow
        [Company Name] to design solutions using the best technology available.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Why We&apos;re Vendor Neutral
      </h2>
      <p className="mt-2 max-w-3xl text-zinc-600 dark:text-zinc-400">
        We design solutions across multiple robotics platforms. That means we
        recommend the right hardware and software for your use case—whether
        humanoid, AMR, drone, or industrial arm—instead of pushing a single
        vendor. Our engineers integrate any of these systems with your ERP,
        warehouse systems, and cloud infrastructure.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Technology Partners
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((name) => (
          <li
            key={name}
            className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-center font-medium text-zinc-800 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {name}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        Logo assets available from official press kits (e.g. Boston Dynamics
        Media, DJI Brand, UBTech).
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/solutions"
          className="font-medium text-zinc-900 underline dark:text-zinc-50"
        >
          View our solutions →
        </Link>
        <CTA href="/contact">Get in touch</CTA>
      </div>
    </div>
  );
}
