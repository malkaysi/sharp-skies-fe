import Stacker from "@/features/stacker/stacker";

type StackPageProps = {
  selectedVideo: File;
  onClear: () => void;
  onProceedToEnhance: (file: File) => void;
};

export default function StackPage({
  selectedVideo,
  onClear,
  onProceedToEnhance,
}: StackPageProps) {
  return (
    <Stacker
      selectedVideo={selectedVideo}
      onClear={onClear}
      onProceedToEnhance={onProceedToEnhance}
    />
  );
}
