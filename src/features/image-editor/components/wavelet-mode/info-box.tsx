import { Info } from "lucide-react";

export default function InfoBox() {
  return (
    <div className="px-5 py-3.5 border-b border-border">
      <div className="flex gap-2.5 p-[10px_12px] bg-primary/8 border border-primary/12 rounded text-[13px] text-muted-foreground leading-relaxed">
        <Info className="shrink-0 w-3.5 h-3.5 mt-px text-primary" />
        <span>
          Each layer isolates detail at a different spatial frequency. Layer 1
          captures the finest detail; higher layers target progressively larger
          structures.
        </span>
      </div>
    </div>
  );
}
