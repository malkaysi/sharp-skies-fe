import { useEffect, useState } from "react";
import ProcessingHeader from "../components/processing-header";

type ProcessingPhaseProps = {
  fileName: string;
  onCancel: () => void;
};

export default function ProcessingPhase({
  fileName,
  onCancel,
}: ProcessingPhaseProps) {
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => setElapsedMs(Date.now() - start), 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <ProcessingHeader fileName={fileName} onCancel={onCancel} />

      <div className="flex flex-1 flex-col items-center justify-center gap-3">
        <p className="font-mono text-sm text-muted-foreground">
          Extracting, scoring, aligning, and stacking frames…
        </p>
        <p className="font-mono text-xs text-muted-foreground/60">
          {(elapsedMs / 1000).toFixed(1)}s elapsed
        </p>
      </div>
    </div>
  );
}
