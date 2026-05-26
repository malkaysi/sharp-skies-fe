import { RotateCcw } from "lucide-react";

type ResetButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export default function ResetButton({ onClick, disabled }: ResetButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-2 rounded-xl text-xs font-medium border border-border bg-transparent text-muted-foreground flex items-center justify-center gap-1.5 hover:text-foreground hover:bg-muted transition-all disabled:opacity-50"
    >
      <RotateCcw size={13} />
      Reset to Defaults
    </button>
  );
}
