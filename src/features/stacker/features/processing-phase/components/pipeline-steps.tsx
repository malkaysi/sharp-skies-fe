import { Activity, Check, Film, Layers, ListFilter, Move } from "lucide-react";
import { useEffect, useState } from "react";

const STEPS = [
  { label: "Extract Frames", detail: "Reading frames from video", icon: Film },
  { label: "Score Frames", detail: "Laplacian + Tenengrad", icon: Activity },
  {
    label: "Select Best",
    detail: "Ranking by quality score",
    icon: ListFilter,
  },
  { label: "Align Frames", detail: "DIS optical flow", icon: Move },
  { label: "Stack", detail: "Quality-weighted mean", icon: Layers },
];

const STEP_START_DELAY_MS = 700;
const STEP_INTERVAL_MS = 1100;

type StepState = "done" | "active" | "pending";

type PipelineStepsProps = {
  fetchDone: boolean;
};

export default function PipelineSteps({ fetchDone }: PipelineStepsProps) {
  const [timerDoneCount, setTimerDoneCount] = useState(0);

  useEffect(() => {
    const timers = STEPS.slice(0, -1).map((_, i) =>
      setTimeout(
        () => setTimerDoneCount(i + 1),
        STEP_START_DELAY_MS + i * STEP_INTERVAL_MS,
      ),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Derived, not synced: once the real request resolves, every step is
  // done — no need for an effect to mirror `fetchDone` into state.
  const doneCount = fetchDone ? STEPS.length : timerDoneCount;

  return (
    <div className="flex flex-col gap-3 px-6 py-5">
      {STEPS.map((step, i) => {
        const state: StepState =
          i < doneCount ? "done" : i === doneCount ? "active" : "pending";
        const Icon = step.icon;
        return (
          <div key={step.label} className="flex items-center gap-3">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${
                state === "done"
                  ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                  : state === "active"
                    ? "border-primary/20 bg-primary/10 text-primary"
                    : "border-border bg-muted text-muted-foreground/40"
              }`}
            >
              {state === "done" ? <Check size={14} /> : <Icon size={14} />}
            </div>
            <div className="flex-1 text-center">
              <div
                className={`text-xs font-semibold ${
                  state === "pending" ? "text-muted-foreground/40" : ""
                }`}
              >
                {step.label}
              </div>
              <div className="mt-0.5 font-mono text-[10px] text-muted-foreground/60">
                {state === "pending" ? "—" : step.detail}
              </div>
            </div>
            <div
              className={`h-2 w-2 shrink-0 rounded-full bg-primary transition-opacity ${
                state === "active" ? "animate-pulse opacity-100" : "opacity-0"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
