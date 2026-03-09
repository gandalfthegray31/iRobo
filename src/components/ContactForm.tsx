"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const roboticsInterests = [
  "Warehouse robotics",
  "Humanoid robots",
  "Drone automation",
  "Manufacturing robotics",
  "Consulting",
  "Training",
  "Workforce training",
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const interestParam = searchParams.get("interest");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const defaultInterest = interestParam ?? "";

  return (
    <>
      {submitted ? (
        <div className="mt-12 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
          <p className="font-medium text-green-800 dark:text-green-200">
            Thank you. Your request has been received.
          </p>
          <p className="mt-2 text-sm text-green-700 dark:text-green-300">
            Interested in training?{" "}
            <Link href="/training" className="underline">
              Explore our training programs
            </Link>{" "}
            or view the{" "}
            <Link href="/training/schedule" className="underline">
              training schedule
            </Link>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
            />
          </div>
          <div>
            <label
              htmlFor="industry"
              className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
            >
              Industry
            </label>
            <input
              id="industry"
              name="industry"
              type="text"
              placeholder="e.g. Logistics, Manufacturing"
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
            />
          </div>
          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
            >
              Robotics Interest
            </label>
            <select
              id="interest"
              name="interest"
              defaultValue={defaultInterest}
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
            >
              <option value="">Select an option</option>
              {roboticsInterests.map((opt) => (
                <option
                  key={opt}
                  value={opt.toLowerCase().replace(/\s+/g, "-")}
                >
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
            >
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Schedule Robotics Consultation
          </button>
        </form>
      )}
    </>
  );
}
