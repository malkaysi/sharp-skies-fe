import WorkflowButton from "./components/workflow-button";
import type { Workflow } from "./types";

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
        <WorkflowButton
          workflow="Stack"
          activeWorkflow={value}
          onChange={handleWorkflowChange}
        />

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
