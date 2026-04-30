import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type HeaderProps = {
  onBack: () => void;
  fileName: string;
};

export default function Header({ onBack, fileName }: HeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <Button
          onClick={onBack}
          variant="ghost"
          className="flex items-center gap-1.5 text-muted-foreground text-xs font-medium cursor-pointer p-1.5 rounded-md border-none"
        >
          <ArrowLeft size={16} />
          Library
        </Button>
        <span
          className="font-mono text-xs text-[#585e72] px-2.5 py-1 bg-[#1a1e28] rounded-md border border-[#1e2230]"
          id="editor-filename"
        >
          {fileName}
        </span>
      </div>
    </header>
  );
}
