import { Button } from "@/components/ui/button";

type StackPageProps = {
  selectedVideo: File;
  onClear: () => void;
};

export default function StackPage({ selectedVideo, onClear }: StackPageProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-10">
      <p className="font-mono text-sm text-muted-foreground">
        {selectedVideo.name}
      </p>
      <p className="text-xs text-muted-foreground/60">
        Stack workflow — coming soon
      </p>
      <Button variant="ghost" onClick={onClear}>
        Back
      </Button>
    </div>
  );
}
