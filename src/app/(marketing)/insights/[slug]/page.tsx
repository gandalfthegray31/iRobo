import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getInsightBySlug,
  getRelatedInsights,
  getAllInsights,
} from "@/content/insights";
import { getInsightBody } from "@/content/insightBodies";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllInsights().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return { title: "Insight" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) notFound();

  const related = getRelatedInsights(slug, 2);
  const body = getInsightBody(slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/insights"
        className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← Insights
      </Link>
      <time
        dateTime={post.date}
        className="mt-4 block text-sm text-zinc-500 dark:text-zinc-400"
      >
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <h1 className="mt-2 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {post.excerpt}
      </p>
      <div className="prose prose-zinc mt-10 dark:prose-invert">
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400">{body}</div>
      </div>

      {related.length > 0 && (
        <aside className="mt-16 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Related posts
          </h2>
          <ul className="mt-4 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/insights/${r.slug}`}
                  className="font-medium text-zinc-900 underline dark:text-zinc-50"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <p className="mt-10">
        <Link
          href="/insights"
          className="font-medium text-zinc-700 dark:text-zinc-300"
        >
          View all insights →
        </Link>
      </p>
    </div>
  );
}
