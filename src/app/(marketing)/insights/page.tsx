import type { Metadata } from "next";
import Link from "next/link";
import { getAllInsights } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert perspectives on physical AI, enterprise robotics, humanoid robots, and robotics deployment from [Company Name].",
};

export default function InsightsPage() {
  const posts = getAllInsights();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Insights
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Latest thinking on physical AI, enterprise robotics deployment, and
        industry trends.
      </p>

      <ul className="mt-12 space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <article className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <time
                dateTime={post.date}
                className="text-sm text-zinc-500 dark:text-zinc-400"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                <Link href={`/insights/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {post.excerpt}
              </p>
              <Link
                href={`/insights/${post.slug}`}
                className="mt-4 inline-block font-medium text-zinc-900 dark:text-zinc-50"
              >
                Read more →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
