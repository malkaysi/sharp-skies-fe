import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";

type ResultHeaderProps = {
  fileName: string;
  onBack: () => void;
  onDownload: () => void;
};

export default function ResultHeader({
  fileName,
  onBack,
  onDownload,
}: ResultHeaderProps) {
  return (
    <div className="flex h-13 shrink-0 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5">
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
  );
}
