import { SessionShell } from "@/components/portal/SessionShell";
import { loadSessionPageViewModel } from "@/lib/portal/load-session-page";

export default async function Home() {
  const model = await loadSessionPageViewModel();
  return <SessionShell model={model} />;
}
