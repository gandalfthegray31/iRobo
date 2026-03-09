export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  relatedSlugs?: string[];
};

export const insights: InsightPost[] = [
  {
    slug: "future-of-humanoid-robots-in-logistics",
    title: "The Future of Humanoid Robots in Logistics",
    excerpt:
      "How humanoid robots are moving from research labs into real warehouse and logistics operations, and what it means for the industry.",
    date: "2025-02-15",
    relatedSlugs: [
      "how-ai-transforms-industrial-robotics",
      "top-10-use-cases-physical-ai",
    ],
  },
  {
    slug: "how-ai-transforms-industrial-robotics",
    title: "How AI is Transforming Industrial Robotics",
    excerpt:
      "From vision systems to predictive maintenance, AI is making industrial robots smarter, safer, and more productive.",
    date: "2025-02-01",
    relatedSlugs: [
      "deploying-robots-safely-enterprise",
      "future-of-humanoid-robots-in-logistics",
    ],
  },
  {
    slug: "deploying-robots-safely-enterprise",
    title: "Deploying Robots Safely in Enterprise Environments",
    excerpt:
      "Best practices for safety compliance, risk assessment, and workforce coordination when bringing robots into your operations.",
    date: "2025-01-20",
    relatedSlugs: [
      "how-ai-transforms-industrial-robotics",
      "top-10-use-cases-physical-ai",
    ],
  },
  {
    slug: "top-10-use-cases-physical-ai",
    title: "Top 10 Use Cases for Physical AI",
    excerpt:
      "A practical guide to the highest-impact applications of physical AI across logistics, manufacturing, and infrastructure.",
    date: "2025-01-10",
    relatedSlugs: [
      "future-of-humanoid-robots-in-logistics",
      "deploying-robots-safely-enterprise",
    ],
  },
];

export function getFeaturedInsights(limit: number): InsightPost[] {
  return insights.slice(0, limit);
}

export function getAllInsights(): InsightPost[] {
  return insights;
}

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return insights.find((p) => p.slug === slug);
}

export function getRelatedInsights(slug: string, limit = 2): InsightPost[] {
  const post = getInsightBySlug(slug);
  if (!post?.relatedSlugs?.length) return [];
  return post.relatedSlugs
    .map((s) => getInsightBySlug(s))
    .filter(Boolean) as InsightPost[];
}
