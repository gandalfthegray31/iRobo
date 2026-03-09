import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Contact Us
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Schedule a robotics consultation or request an assessment. We&apos;ll
          get back to you shortly.
        </p>

        <Suspense
          fallback={
            <div className="mt-12 animate-pulse rounded-lg border border-zinc-200 bg-zinc-100 py-24 dark:border-zinc-800 dark:bg-zinc-800" />
          }
        >
          <ContactForm />
        </Suspense>

        <p className="mt-12 text-zinc-600 dark:text-zinc-400">
          Want to train your team?{" "}
          <Link
            href="/training"
            className="font-medium text-zinc-900 underline dark:text-zinc-50"
          >
            View our training programs
          </Link>{" "}
          and{" "}
          <Link
            href="/training/schedule"
            className="font-medium text-zinc-900 underline dark:text-zinc-50"
          >
            schedule
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
