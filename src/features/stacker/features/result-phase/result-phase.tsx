import ResultHeader from "./components/result-header";
import ResultQualityChart from "./components/result-quality-chart";
import StatCard from "./components/stat-card";
import type { FrameSelectionMode, StackResult } from "../../types/stacker";

type ResultPhaseProps = {
  fileName: string;
  result: StackResult;
  imageUrl: string;
  mode: FrameSelectionMode;
  onBack: () => void;
  onDownload: () => void;
};

export default function ResultPhase({
  fileName,
  result,
  imageUrl,
  mode,
  onBack,
  onDownload,
}: ResultPhaseProps) {
  return (
    <div className="flex flex-1 flex-col">
      <ResultHeader
        fileName={fileName}
        onBack={onBack}
        onDownload={onDownload}
      />

      <div className="grid flex-1 grid-cols-1 gap-4 overflow-hidden p-6 md:grid-cols-[3fr_1fr]">
        <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={imageUrl}
            className="max-h-[70vh] w-full max-w-[96%] rounded-xl object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto">
          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Frames analyzed" value={result.framesTotal} />
            <StatCard label="Frames stacked" value={result.framesSelected} />
            <StatCard label="Top selected" value={`${result.topPercent}%`} />
            <StatCard
              label="Process time"
              value={`${(result.elapsedMs / 1000).toFixed(1)}s`}
            />
          </div>

          <ResultQualityChart
            cutoffPercent={result.topPercent}
            cutoffFrame={result.framesSelected}
            mode={mode}
          />
        </div>
      </div>
    </div>
  );
}
