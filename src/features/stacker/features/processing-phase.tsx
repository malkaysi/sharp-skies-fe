import { useEffect, useState } from "react";
import ProcessingHeader from "../components/processing-header";
import PipelineSteps from "../components/pipeline-steps";
import FrameGrid from "../components/frame-grid";
import QualityChart from "../components/quality-chart";

type ProcessingPhaseProps = {
  fileName: string;
  onCancel: () => void;
  fetchDone: boolean;
};

export default function ProcessingPhase({
  fileName,
  onCancel,
  fetchDone,
}: ProcessingPhaseProps) {
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => setElapsedMs(Date.now() - start), 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ProcessingHeader fileName={fileName} onCancel={onCancel} />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col items-center justify-center gap-5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Extracted Frames
          </span>
          <FrameGrid />
          <span className="font-mono text-[11px] text-muted-foreground">
            Extracting frames…
          </span>
        </div>

        <div className="flex w-92.5 shrink-0 flex-col overflow-y-auto border-l border-border bg-card">
          <div className="border-b border-border px-6 pb-4 pt-5">
            <div className="text-sm font-semibold">Analysis Pipeline</div>
            <div className="mt-0.5 text-[11px] text-muted-foreground">
              Ranking and selecting best frames
            </div>
          </div>

          <PipelineSteps fetchDone={fetchDone} />
          <div className="border-t border-border" />
          <QualityChart />
          <div className="border-t border-border" />

          <div className="px-6 py-5">
            <div className="rounded-[10px] border border-border bg-muted p-3">
              <div className="mb-1.5 font-mono text-[10px] text-muted-foreground">
                Elapsed
              </div>
              <div className="font-mono text-xl font-bold">
                {(elapsedMs / 1000).toFixed(1)}s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
