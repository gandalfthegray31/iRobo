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

      <h2 className="mt-12 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Featured platforms
      </h2>
      <p className="mt-2 max-w-3xl text-zinc-600 dark:text-zinc-400">
        We integrate humanoid and mobile robots from partners such as UBTECH
        (Walker S2) and Boston Dynamics (Spot, Atlas). Source:{" "}
        <a
          href="https://www.ubtrobot.com/en/humanoid/products/walker-s2"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          UBTECH Walker S2
        </a>
        .
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
          <img
            src="https://owebsite-cdn.ubtrobot.com/resources/image/2025/07/22/700558958612549.jpg"
            alt="UBTECH Walker S2 industrial humanoid"
            className="h-52 w-full object-cover object-center"
          />
          <p className="p-3 text-sm text-zinc-600 dark:text-zinc-400">
            UBTECH Walker S2
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
          <img
            src="https://owebsite-cdn.ubtrobot.com/resources/image/2025/09/09/717897582592069.jpg"
            alt="Walker S2 capabilities"
            className="h-52 w-full object-cover object-center"
          />
          <p className="p-3 text-sm text-zinc-600 dark:text-zinc-400">
            Walker S2 — 24/7 operation
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
          <img
            src="https://owebsite-cdn.ubtrobot.com/resources/image/2025/07/24/701244770754629.png"
            alt="Walker S2 specifications"
            className="h-52 w-full object-cover object-center"
          />
          <p className="p-3 text-sm text-zinc-600 dark:text-zinc-400">
            Industrial humanoid specs
          </p>
        </div>
      </div>

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
