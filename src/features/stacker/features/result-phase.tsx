import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import type { StackResult } from "../types/stacker";

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
      <div className="flex h-13 shrink-0 items-center justify-between border-b border-border bg-card px-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="gap-1.5"
          >
            <ArrowLeft size={16} />
            Library
          </Button>
          <span className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
            {fileName}
          </span>
          <span className="rounded-md border border-emerald-500/15 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-400">
            Stacking complete
          </span>
        </div>
        <Button size="sm" onClick={onDownload} className="gap-1.5">
          <Download size={14} />
          Download
        </Button>
      </div>

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
