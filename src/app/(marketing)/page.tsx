import Link from "next/link";
import { CTA } from "@/components/CTA";
import { getFeaturedInsights } from "@/content/insights";
import { getUpcomingTraining } from "@/content/training";

export default function HomePage() {
  const featuredInsights = getFeaturedInsights(3);
  const upcomingTraining = getUpcomingTraining(3);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] border-b border-zinc-200 dark:border-zinc-800"
        style={{
          backgroundImage: "url(https://www.unitree.com/images/7b830fccde8d41ac8e3fcec334e84735_3840x1988.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-zinc-900/60 dark:bg-zinc-950/70"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Enterprise Robotics Integration for the Physical AI Era
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-200">
            [Company Name] helps organizations deploy robots, humanoids, and
            autonomous systems into real-world operations — safely, efficiently,
            and at scale.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTA href="/contact">Book a Robotics Strategy Call</CTA>
            <CTA href="/contact?interest=guide" variant="outline-inverse">
              Download Physical AI Deployment Guide
            </CTA>
          </div>
        </div>
      </section>

      {/* Physical AI Revolution */}
      <section className="relative min-h-[60vh] overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source
            src="https://owebsite-cdn.ubtrobot.com/resources/video/2025/07/23/700932933050437.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0 bg-zinc-900/65 dark:bg-zinc-950/70"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            The Next Wave of AI is Physical
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-zinc-200">
            <p>
              Artificial Intelligence is no longer confined to software. Across
              logistics, manufacturing, healthcare, retail, and infrastructure,
              organizations are deploying <strong className="text-white">physical AI systems</strong> —
              robots, drones, autonomous machines, and humanoid assistants.
            </p>
            <p>These systems transform how work is performed:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Autonomous warehouse operations</li>
              <li>Intelligent inspection drones</li>
              <li>Service robots in retail and hospitality</li>
              <li>Humanoid assistants in industrial environments</li>
              <li>Automated material handling</li>
              <li>Smart manufacturing robotics</li>
            </ul>
            <p>
              However, <strong className="text-white">deploying robotics into real operations is complex</strong>.
              Organizations must integrate hardware, AI software, cloud
              infrastructure, safety systems, operational workflows, and
              workforce training. This is where [Company Name] comes in.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            End-to-End Robotics Integration
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            [Company Name] helps enterprises design, deploy, and operate
            robotics systems across complex environments.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Robotics Strategy & Assessment
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Operational workflow analysis, feasibility assessment, cost/ROI
                modeling, technology selection, risk analysis.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Robotics Systems Integration
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Robot fleet deployment, AI configuration, warehouse automation,
                workflow orchestration, ERP/MES/WMS integration.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                AI & Cloud Integration
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Telemetry pipelines, AI inference, orchestration platforms,
                digital twins, predictive maintenance.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Robotics Operations & Support
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Monitoring, predictive maintenance, fleet management, safety
                compliance, workforce training.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <CTA href="/contact">Talk to a Robotics Architect</CTA>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-b border-zinc-200 py-16 dark:border-zinc-800 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Working with the World&apos;s Leading Robotics Manufacturers
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            We maintain partnerships and integration experience with many of the
            world&apos;s leading robotics manufacturers. These relationships
            allow [Company Name] to design solutions using the best technology
            available.
          </p>
          <ul className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {[
              "Boston Dynamics",
              "UBTech Robotics",
              "DJI",
              "Agility Robotics",
              "Unitree Robotics",
              "FANUC",
              "KUKA",
              "ABB Robotics",
            ].map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p className="mt-6">
            <Link
              href="/robotics-partners"
              className="font-medium text-zinc-900 underline dark:text-zinc-50"
            >
              View our partners →
            </Link>
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://bostondynamics.com/wp-content/uploads/2023/04/spot-with-spot-cam-ir.jpg"
                alt="Spot robot with thermal imaging for inspection"
                className="h-56 w-full object-cover object-center"
              />
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Spot: inspection and sensing in the field
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://bostondynamics.com/wp-content/uploads/2025/12/atlas-home-2026-v2.jpg"
                alt="Atlas humanoid robot"
                className="h-56 w-full object-cover object-center"
              />
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Atlas: next-generation humanoid robotics
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://bostondynamics.com/wp-content/uploads/2026/01/atlas-render-blog.jpg"
                alt="Atlas humanoid robot in industrial settings"
                className="h-56 w-full object-cover object-center"
              />
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Atlas: built for real-world deployment
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            UBTECH Walker S2 — industrial humanoid with autonomous battery
            swapping
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://owebsite-cdn.ubtrobot.com/resources/image/2025/07/17/698770322690117.jpg"
                alt="UBTECH Walker S2 industrial humanoid robot"
                className="h-56 w-full object-cover object-center"
              />
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Walker S2: next-gen industrial humanoid
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://owebsite-cdn.ubtrobot.com/resources/image/2025/07/22/700558958612549.jpg"
                alt="Walker S2 capabilities and deployment"
                className="h-56 w-full object-cover object-center"
              />
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Payload and workspace flexibility
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://owebsite-cdn.ubtrobot.com/resources/image/2025/11/20/743380301672517.jpg"
                alt="Walker S2 mass production and delivery"
                className="h-56 w-full object-cover object-center"
              />
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Mass production and delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Industries We Transform
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            From logistics to healthcare, robotics and physical AI are reshaping
            how industries operate.
          </p>
          <div className="mt-10 w-full overflow-hidden rounded-lg">
            <img
              src="https://www.unitree.com/images/2b9855f7c43845819ab6d8156c75aeea_3840x2143.jpg?x-oss-process=image/quality,q_60/format,webp"
              alt="Robotics and physical AI across industries"
              className="w-full h-auto max-h-[45vh] object-cover object-center"
            />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Logistics & Warehousing",
                items: [
                  "Autonomous material handling",
                  "Robotic picking systems",
                  "Warehouse drones",
                  "AI inventory inspection",
                ],
              },
              {
                name: "Manufacturing",
                items: [
                  "Robotic assembly lines",
                  "Inspection robots",
                  "Predictive maintenance robotics",
                ],
              },
              {
                name: "Retail & Hospitality",
                items: [
                  "Service robots",
                  "Autonomous cleaning robots",
                  "Customer assistance robotics",
                ],
              },
              {
                name: "Healthcare",
                items: [
                  "Robotic logistics",
                  "Hospital automation",
                  "Medical support robots",
                ],
              },
              {
                name: "Energy & Infrastructure",
                items: [
                  "Inspection drones",
                  "Pipeline robots",
                  "Hazardous environment robotics",
                ],
              },
            ].map((industry) => (
              <div
                key={industry.name}
                className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {industry.name}
                </h3>
                <ul className="mt-3 list-inside list-disc text-sm text-zinc-600 dark:text-zinc-400">
                  {industry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/industries"
              className="font-medium text-zinc-900 underline dark:text-zinc-50"
            >
              Explore industries →
            </Link>
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-b border-zinc-200 py-16 dark:border-zinc-800 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Trusted Robotics Integrators
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Vendor Neutral
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                We design solutions across multiple robotics platforms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Enterprise-Grade Integration
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Our engineers specialize in integrating robotics with ERP,
                warehouse systems, cloud infrastructure, and AI platforms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Global Deployment
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                [Company Name] operates across North America, Europe, Middle
                East, Africa, and Australia. We support global robotics
                deployments across distributed operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Featured Insights
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Latest thinking on physical AI and enterprise robotics.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {featuredInsights.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900"
              >
                <h3 className="font-semibold text-zinc-900 group-hover:underline dark:text-zinc-50">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
                <span className="mt-2 inline-block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/insights"
              className="font-medium text-zinc-900 underline dark:text-zinc-50"
            >
              View all insights →
            </Link>
          </p>
        </div>
      </section>

      {/* Upcoming Training */}
      <section className="border-b border-zinc-200 py-16 dark:border-zinc-800 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Upcoming Training
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Upskill your team for the physical AI era.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {upcomingTraining.map((item) => (
              <div
                key={item.slug}
                className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.format} · {item.duration}
                </p>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                  {item.nextDate}
                </p>
                <div className="mt-4 flex gap-2">
                  <CTA href="/training/schedule" variant="outline" key="schedule">
                    View schedule
                  </CTA>
                  <CTA href={`/training/${item.slug}`} variant="secondary" key="detail">
                    Details
                  </CTA>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/training"
              className="font-medium text-zinc-900 underline dark:text-zinc-50"
            >
              Explore all training →
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-zinc-900 py-16 dark:bg-zinc-950 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Start Your Robotics Transformation
          </h2>
          <p className="mt-4 text-zinc-300">
            Book a strategy consultation, request an assessment, or download our
            industry whitepaper.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTA href="/contact">Book a Strategy Consultation</CTA>
            <CTA href="/contact" variant="secondary">
              Request a Robotics Assessment
            </CTA>
            <Link
              href="/contact?interest=whitepaper"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Download Industry Whitepaper
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
