import type { FrameSelectionMode, StackResult } from "../../../types/stacker";
import ContinueActions from "./continue-actions";
import ResultQualityChart from "./result-quality-chart";
import StatCard from "./stat-card";

type ResultSidebarProps = {
  result: StackResult;
  mode: FrameSelectionMode;
  onDownload: () => void;
  onEnhance: () => void;
  onRemoveBackgroundGlow: () => void;
  onRevertBackgroundGlow: () => void;
  isRemovingGlow: boolean;
  isGlowRemoved: boolean;
  glowError: string | null;
};

export default function ResultSidebar({
  result,
  mode,
  onDownload,
  onEnhance,
  onRemoveBackgroundGlow,
  onRevertBackgroundGlow,
  isRemovingGlow,
  isGlowRemoved,
  glowError,
}: ResultSidebarProps) {
  return (
    <div className="flex w-92.5 shrink-0 flex-col overflow-y-auto border-l border-border bg-card text-left">
      <div className="border-b border-border px-6 pb-4 pt-5">
        <div className="text-sm font-semibold">Stacking Summary</div>
        <div className="mt-0.5 text-[11px] text-muted-foreground">
          {result.framesTotal} frames analyzed ·{" "}
          {(result.elapsedMs / 1000).toFixed(1)}s total
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-6 py-5">
        <StatCard label="Frames analyzed" value={result.framesTotal} />
        <StatCard label="Frames stacked" value={result.framesSelected} />
        <StatCard label="Top selected" value={`${result.topPercent}%`} />
        <StatCard
          label="Process time"
          value={`${(result.elapsedMs / 1000).toFixed(1)}s`}
        />
      </div>

      <div className="border-t border-border" />

      <div className="px-6 py-5">
        <ResultQualityChart
          cutoffPercent={result.topPercent}
          cutoffFrame={result.framesSelected}
          mode={mode}
        />
      </div>

      <div className="border-t border-border" />

      <ContinueActions
        onEnhance={onEnhance}
        onDownload={onDownload}
        onRemoveBackgroundGlow={onRemoveBackgroundGlow}
        onRevertBackgroundGlow={onRevertBackgroundGlow}
        isRemovingGlow={isRemovingGlow}
        isGlowRemoved={isGlowRemoved}
        glowError={glowError}
      />
    </div>
  );
}
