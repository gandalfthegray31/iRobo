import Link from "next/link";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export function CTA({ href, children, variant = "primary" }: CTAProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition";
  const styles = {
    primary:
      "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
    secondary:
      "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600",
    outline:
      "border border-zinc-300 bg-transparent hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
