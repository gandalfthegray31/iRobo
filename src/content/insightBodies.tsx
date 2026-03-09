import Link from "next/link";
import type { ReactNode } from "react";

export function getInsightBody(slug: string): ReactNode {
  const bodies: Record<string, ReactNode> = {
    "future-of-humanoid-robots-in-logistics": (
      <>
        <p>
          Humanoid robots are moving out of research labs and into real
          warehouse and logistics operations. With bipedal mobility and
          human-like manipulation, they can navigate spaces designed for people
          and perform tasks that have traditionally required human workers.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Where humanoids add value
        </h3>
        <p>
          In logistics, humanoids are being piloted for case picking, pallet
          handling, and inspection. Their ability to use existing infrastructure
          (stairs, doors, standard shelving) reduces the need for facility
          redesign. As the technology matures, expect to see more{" "}
          <Link href="/solutions#humanoid" className="underline">
            humanoid robotics deployment
          </Link>{" "}
          in distribution centers and manufacturing.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Getting ready
        </h3>
        <p>
          Success depends on integration with WMS, safety protocols, and
          workforce readiness. [Company Name] helps organizations assess
          feasibility, select technology, and prepare teams through{" "}
          <Link href="/training" className="underline">
            training programs
          </Link>
          .
        </p>
      </>
    ),
    "how-ai-transforms-industrial-robotics": (
      <>
        <p>
          AI is transforming industrial robotics beyond simple automation.
          Vision systems enable bin picking and quality inspection; predictive
          maintenance reduces downtime; and learning algorithms optimize paths
          and throughput.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Key areas of impact
        </h3>
        <p>
          In manufacturing, AI-powered robots handle variability that used to
          require human judgment. They adapt to different part geometries,
          detect defects in real time, and coordinate with other machines and
          systems. Integration with{" "}
          <Link href="/industries#manufacturing" className="underline">
            manufacturing
          </Link>{" "}
          workflows and MES/ERP is essential for ROI.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          What to plan for
        </h3>
        <p>
          Deploying AI-driven robotics requires the right data pipelines, cloud or
          edge inference, and ongoing tuning. Our{" "}
          <Link href="/solutions" className="underline">
            solutions
          </Link>{" "}
          cover strategy, integration, and operations so you can scale with
          confidence.
        </p>
      </>
    ),
    "deploying-robots-safely-enterprise": (
      <>
        <p>
          Deploying robots in enterprise environments demands rigorous attention
          to safety. That includes risk assessment, compliance with standards
          (e.g. ISO 10218, ISO 3691-4 for AMRs), and clear protocols for
          human-robot interaction.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Safety by design
        </h3>
        <p>
          From the start, we help clients define operating zones, emergency
          procedures, and lockout/tagout practices. Safety is integrated into
          workflow design and monitoring, not bolted on afterward. This aligns
          with how we approach{" "}
          <Link href="/solutions#warehouse" className="underline">
            warehouse robotics
          </Link>{" "}
          and other physical AI deployments.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          People and process
        </h3>
        <p>
          Workforce training is critical. Staff need to know how to work around
          robots, when to intervene, and how to escalate. [Company Name] offers{" "}
          <Link href="/training/workforce-robotics-training" className="underline">
            workforce robotics training
          </Link>{" "}
          tailored to your environment so that deployment is safe and
          sustainable.
        </p>
      </>
    ),
    "top-10-use-cases-physical-ai": (
      <>
        <p>
          Physical AI—robots, drones, and autonomous systems in the real
          world—is delivering value across industries. Here are ten
          high-impact use cases we see most often in our work with enterprises.
        </p>
        <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Logistics and warehousing
        </h3>
        <p>
          Autonomous mobile robots for material movement; robotic picking and
          palletizing; drones for inventory counts; humanoid pilots for
          case-handling. See our{" "}
          <Link href="/industries#logistics" className="underline">
            logistics
          </Link>{" "}
          and{" "}
          <Link href="/solutions#warehouse" className="underline">
            warehouse solutions
          </Link>
          .
        </p>
        <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Manufacturing and infrastructure
        </h3>
        <p>
          Robotic assembly and inspection; predictive maintenance; drone-based
          infrastructure inspection; pipeline and hazardous-environment robots.
          Each use case benefits from a clear strategy and the right integration
          and{" "}
          <Link href="/training" className="underline">
            training
          </Link>
          .
        </p>
      </>
    ),
  };
  return bodies[slug] ?? null;
}
