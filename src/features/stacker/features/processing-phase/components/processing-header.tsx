import { Button } from "@/components/ui/button";

type ProcessingHeaderProps = {
  fileName: string;
  onCancel: () => void;
};

export default function ProcessingHeader({
  fileName,
  onCancel,
}: ProcessingHeaderProps) {
  return (
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
  );
}
