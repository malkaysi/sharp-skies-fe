import { Button } from "@/components/ui/button";
import { Download, Loader2, RotateCcw, Sparkles, Sun } from "lucide-react";

type ContinueActionsProps = {
  onEnhance: () => void;
  onDownload: () => void;
  onRemoveBackgroundGlow: () => void;
  onRevertBackgroundGlow: () => void;
  isRemovingGlow: boolean;
  isGlowRemoved: boolean;
  glowError: string | null;
};

export default function ContinueActions({
  onEnhance,
  onDownload,
  onRemoveBackgroundGlow,
  onRevertBackgroundGlow,
  isRemovingGlow,
  isGlowRemoved,
  glowError,
}: ContinueActionsProps) {
  return (
    <div className="flex flex-col gap-2 px-6 py-5">
      <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Continue
      </div>

      <Button onClick={onEnhance} className="w-full gap-2">
        <Sparkles size={14} />
        Enhance this Stack
      </Button>

      <Button
        variant="outline"
        onClick={
          isGlowRemoved ? onRevertBackgroundGlow : onRemoveBackgroundGlow
        }
        disabled={isRemovingGlow}
        className="w-full gap-2"
      >
        {isRemovingGlow ? (
          <Loader2 size={14} className="animate-spin" />
        ) : isGlowRemoved ? (
          <RotateCcw size={14} />
        ) : (
          <Sun size={14} />
        )}
        {isRemovingGlow
          ? "Removing glow…"
          : isGlowRemoved
            ? "Revert Background Glow"
            : "Remove Background Glow"}
      </Button>
      {glowError && (
        <p className="text-center text-[11px] text-destructive">{glowError}</p>
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={onDownload}
        className="w-full gap-1.5 text-xs"
      >
        <Download size={13} />
        Download PNG
      </Button>
    </div>
  );
}
