import { Layers, Sun, type LucideIcon } from "lucide-react";
import type { Workflow } from "../features/workflow-toggle";

const config: Record<Workflow, { label: string; icon: LucideIcon }> = {
  Process: { label: "Process", icon: Sun },
  Stack: { label: "Stack", icon: Layers },
};

type WorkflowButtonProps = {
  workflow: Workflow;
  activeWorkflow: Workflow;
  onChange: (workflow: Workflow) => void;
};

export default function WorkflowButton({
  workflow,
  activeWorkflow,
  onChange,
}: WorkflowButtonProps) {
  const { label, icon: Icon } = config[workflow];
  const isActive = workflow === activeWorkflow;

  return (
    <button
      onClick={() => onChange(workflow)}
      className={`flex items-center gap-2 rounded-[9px] px-6 py-2.5 text-sm font-semibold transition-all ${
        isActive
          ? "bg-muted text-foreground shadow-md"
          : "cursor-pointer text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {label}
    </button>
  );
}
