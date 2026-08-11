import Stacker from "@/features/stacker/stacker";

type StackPageProps = {
  selectedVideo: File;
  onClear: () => void;
};

export default function StackPage({ selectedVideo, onClear }: StackPageProps) {
  return <Stacker selectedVideo={selectedVideo} onClear={onClear} />;
}
