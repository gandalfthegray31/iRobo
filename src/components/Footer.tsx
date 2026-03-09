import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/robotics-partners", label: "Partners" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
  content: [
    { href: "/insights", label: "Blog" },
    { href: "/training", label: "Training" },
    { href: "/training/schedule", label: "Training Schedule" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              [Company Name]
            </p>
            <p className="mt-2 max-w-sm text-sm text-zinc-600 dark:text-zinc-400">
              Enterprise robotics integration for the physical AI era. We help
              organizations deploy robots, humanoids, and autonomous systems
              safely and at scale.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Company
              </h3>
              <ul className="mt-3 space-y-2">
                {footerLinks.company.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Content
              </h3>
              <ul className="mt-3 space-y-2">
                {footerLinks.content.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © {new Date().getFullYear()} [Company Name]. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
