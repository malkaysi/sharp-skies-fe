import { Play } from "lucide-react";

type ApplyButtonProps = {
  onClick: () => void;
  isProcessing: boolean;
};

export default function ApplyButton({
  onClick,
  isProcessing,
}: ApplyButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isProcessing}
      className="w-full py-2.5 rounded-xl text-sm font-semibold bg-linear-to-r from-primary to-primary/80 text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
    >
      <Play size={15} strokeWidth={2.5} />
      {isProcessing ? "Processing..." : "Apply Sharpening"}
    </button>
  );
}
