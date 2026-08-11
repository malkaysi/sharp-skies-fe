import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
      <div className="flex h-13 shrink-0 items-center justify-between border-b border-border bg-card px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            <span className="text-[13px] font-semibold">Processing</span>
          </div>
          <span className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
            {fileName}
          </span>
        </div>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          Cancel
        </Button>
      </div>

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
