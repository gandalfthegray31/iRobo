import { rcPanel } from "@/lib/portal/tokens";

import type { SessionCameraTile } from "@/lib/portal/session-view-model";

type Props = {
  cameras: SessionCameraTile[];
};

const gradientClasses = [
  "from-rc-grad-1-from via-rc-grad-1-via to-rc-grad-1-to",
  "from-rc-grad-2-from via-rc-grad-2-via to-rc-grad-2-to",
  "from-rc-grad-3-from via-rc-grad-3-via to-rc-grad-3-to",
  "from-rc-grad-4-from via-rc-grad-4-via to-rc-grad-4-to",
];

export function CameraGrid({ cameras }: Props) {
  return (
    <div className={rcPanel}>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-rc-text">Live Robot Observation</h2>
        <span className="text-xs text-rc-muted">{cameras.length} Cameras</span>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {cameras.map((camera, index) => (
          <article
            key={camera.name}
            className={`relative h-44 rounded-lg border border-rc-border-strong bg-gradient-to-br ${gradientClasses[index % gradientClasses.length]} p-2 md:h-52`}
          >
            <div className="flex items-center justify-between text-xs">
              <span className="rounded bg-rc-overlay px-2 py-1 text-rc-text">{camera.name}</span>
              <span className="rounded bg-rc-overlay px-2 py-1 text-rc-text">{camera.latency}</span>
            </div>
            <div className="absolute inset-x-0 bottom-2 flex justify-end px-2">
              <button
                type="button"
                className="rounded bg-rc-overlay px-2 py-1 text-xs text-rc-text"
              >
                Fullscreen
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
