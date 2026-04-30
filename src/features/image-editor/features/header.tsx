import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";

type HeaderProps = {
  onBack: () => void;
  fileName: string;
};

export default function Header({ onBack, fileName }: HeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between bg-card">
      <div className="flex items-center gap-4 px-4">
        <Button
          onClick={onBack}
          variant="ghost"
          className="flex items-center gap-1.5 text-muted-foreground text-xs font-medium cursor-pointer p-1.5 rounded-md border-none"
        >
          <ArrowLeft size={16} />
          Library
        </Button>
        <span
          className="font-mono text-xs text-muted-foreground px-2.5 py-1 bg-muted rounded-md border border-primary/20"
          id="editor-filename"
        >
          {fileName}
        </span>
      </div>
      <Button
        size="sm"
        className="mr-4 text-muted text-sm bg-primary hover:bg-primary/90"
      >
        <Download className="mr-2" size={12} />
        Export
      </Button>
    </header>
  );
}
