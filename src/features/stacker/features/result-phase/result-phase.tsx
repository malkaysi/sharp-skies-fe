import ResultHeader from "./components/result-header";
import type { StackResult } from "../../types/stacker";

type ResultPhaseProps = {
  fileName: string;
  result: StackResult;
  imageUrl: string;
  onBack: () => void;
  onDownload: () => void;
};

export default function ResultPhase({
  fileName,
  result,
  imageUrl,
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

        <div className="grid content-start grid-cols-2 gap-3">
          <StatCard label="Frames analyzed" value={result.framesTotal} />
          <StatCard label="Frames stacked" value={result.framesSelected} />
          <StatCard label="Top selected" value={`${result.topPercent}%`} />
          <StatCard
            label="Process time"
            value={`${(result.elapsedMs / 1000).toFixed(1)}s`}
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-[10px] border border-border bg-card p-3">
      <div className="mb-1.5 font-mono text-[10px] text-muted-foreground">
        {label}
      </div>
      <div className="font-mono text-xl font-bold">{value}</div>
    </div>
  );
}
