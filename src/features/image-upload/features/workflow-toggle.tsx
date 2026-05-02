import { Layers } from "lucide-react";
import WorkflowButton from "../components/workflow-button";

export type Workflow = "Process" | "Stack";

type WorkflowToggleProps = {
  value: Workflow;
  handleWorkflowChange: (workflow: Workflow) => void;
};

const descriptions: Record<Workflow, string> = {
  Process:
    "Sharpen and enhance a single stacked image using luminance sharpening or multi-scale wavelet decomposition.",
  Stack:
    "Align and combine multiple sub-exposures into a single image with improved signal-to-noise ratio.",
};

export default function WorkflowToggle({
  value,
  handleWorkflowChange: handleWorkflowChange,
}: WorkflowToggleProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-1 rounded-xl border border-border bg-card p-1">
        <button
          disabled
          className="flex cursor-not-allowed items-center gap-2 rounded-[9px] px-6 py-2.5 text-sm font-semibold text-muted-foreground opacity-60"
        >
          <Layers className="h-4 w-4 shrink-0" />
          Stack
          <span className="rounded border border-amber-500/15 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-amber-400">
            Coming soon
          </span>
        </button>

        <WorkflowButton
          workflow="Process"
          activeWorkflow={value}
          onChange={handleWorkflowChange}
        />
      </div>

      <p className="max-w-105 text-center text-[13px] leading-relaxed text-muted-foreground">
        {descriptions[value]}
      </p>
    </div>
  );
}
