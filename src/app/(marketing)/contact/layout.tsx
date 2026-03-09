import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a robotics consultation or request an assessment. [Company Name] helps enterprises deploy physical AI and robotics.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
