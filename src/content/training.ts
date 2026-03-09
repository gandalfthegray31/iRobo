export type TrainingOffering = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  format: string;
  audience: string;
  objectives: string[];
  outline: string[];
};

export type ScheduleItem = {
  slug: string;
  title: string;
  format: string;
  duration: string;
  nextDate: string;
};

export const trainingOfferings: TrainingOffering[] = [
  {
    slug: "workforce-robotics-training",
    title: "Workforce Robotics Training",
    description:
      "Hands-on training for operations and floor staff: safe interaction with robots, basic troubleshooting, and daily workflows.",
    duration: "1–2 days",
    format: "On-site or virtual",
    audience: "Operations managers, floor supervisors, warehouse staff",
    objectives: [
      "Understand robot capabilities and limitations",
      "Follow safety protocols and emergency procedures",
      "Perform basic operational checks and escalation",
    ],
    outline: [
      "Introduction to robotics in your environment",
      "Safety and compliance",
      "Hands-on operation and coordination",
      "Q&A and certification",
    ],
  },
  {
    slug: "technical-integration-workshops",
    title: "Technical Integration Workshops",
    description:
      "For engineers: APIs, fleet management tools, and integration with WMS/ERP and cloud platforms.",
    duration: "2–3 days",
    format: "On-site or virtual",
    audience: "Integration engineers, DevOps, IT/OT teams",
    objectives: [
      "Integrate robot fleets with existing systems",
      "Configure and maintain orchestration platforms",
      "Implement telemetry and monitoring",
    ],
    outline: [
      "Architecture and APIs",
      "Fleet and workflow orchestration",
      "WMS/ERP integration patterns",
      "Labs and exercises",
    ],
  },
  {
    slug: "leadership-strategy-workshops",
    title: "Leadership & Strategy Workshops",
    description:
      "For decision-makers: ROI modeling, change management, and building a robotics roadmap aligned with business goals.",
    duration: "1 day",
    format: "Virtual or on-site workshop",
    audience: "Executives, operations leaders, strategy teams",
    objectives: [
      "Quantify ROI and total cost of ownership",
      "Plan change management and workforce transition",
      "Define a phased robotics roadmap",
    ],
    outline: [
      "Physical AI strategy overview",
      "ROI and business case",
      "Change management and training",
      "Roadmap workshop",
    ],
  },
];

const scheduleData: ScheduleItem[] = [
  {
    slug: "workforce-robotics-training",
    title: "Workforce Robotics Training",
    format: "On-site",
    duration: "1–2 days",
    nextDate: "April 15–16, 2025",
  },
  {
    slug: "technical-integration-workshops",
    title: "Technical Integration Workshops",
    format: "Virtual",
    duration: "2–3 days",
    nextDate: "April 22–24, 2025",
  },
  {
    slug: "leadership-strategy-workshops",
    title: "Leadership & Strategy Workshops",
    format: "Virtual",
    duration: "1 day",
    nextDate: "May 6, 2025",
  },
];

export function getUpcomingTraining(limit?: number): ScheduleItem[] {
  return limit ? scheduleData.slice(0, limit) : scheduleData;
}

export function getTrainingBySlug(slug: string): TrainingOffering | undefined {
  return trainingOfferings.find((t) => t.slug === slug);
}

export function getAllTrainingSlugs(): string[] {
  return trainingOfferings.map((t) => t.slug);
}
