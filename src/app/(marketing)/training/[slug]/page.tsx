import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import {
  getTrainingBySlug,
  getAllTrainingSlugs,
} from "@/content/training";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllTrainingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getTrainingBySlug(slug);
  if (!course) return { title: "Training" };
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function TrainingCoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getTrainingBySlug(slug);
  if (!course) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/training"
        className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← Training
      </Link>
      <h1 className="mt-4 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        {course.title}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {course.description}
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        {course.duration} · {course.format} · {course.audience}
      </p>

      <h2 className="mt-10 text-xl font-bold text-zinc-900 dark:text-zinc-50">
        Objectives
      </h2>
      <ul className="mt-2 list-inside list-disc text-zinc-600 dark:text-zinc-400">
        {course.objectives.map((obj) => (
          <li key={obj}>{obj}</li>
        ))}
      </ul>

      <h2 className="mt-10 text-xl font-bold text-zinc-900 dark:text-zinc-50">
        Outline
      </h2>
      <ol className="mt-2 list-inside list-decimal text-zinc-600 dark:text-zinc-400">
        {course.outline.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <div className="mt-12 flex flex-wrap gap-4">
        <CTA href="/training/schedule">View schedule</CTA>
        <CTA href="/contact?interest=training" variant="outline">
          Register or request for my team
        </CTA>
      </div>
    </div>
  );
}
