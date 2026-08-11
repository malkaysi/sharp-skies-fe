import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_STACK_SETTINGS,
  STACK_MIN_SIMULATED_DURATION_MS,
} from "@/utils/constants";
import type { StackerPhase, StackResult } from "./types/stacker";
import ProcessingPhase from "./features/processing-phase/processing-phase";
import ResultPhase from "./features/result-phase/result-phase";
import { stackVideo } from "./services/stackVideo";

type StackerProps = {
  selectedVideo: File;
  onClear: () => void;
};

export default function Stacker({ selectedVideo, onClear }: StackerProps) {
  const [phase, setPhase] = useState<StackerPhase>("processing");
  const [result, setResult] = useState<StackResult | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fetchDone, setFetchDone] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    const minDuration = new Promise<void>((resolve) =>
      setTimeout(resolve, STACK_MIN_SIMULATED_DURATION_MS),
    );
    const fetchPromise = stackVideo(
      selectedVideo,
      DEFAULT_STACK_SETTINGS,
      controller.signal,
    );

    fetchPromise
      .then(() => {
        if (!ignore) setFetchDone(true);
      })
      .catch(() => {});

    async function run() {
      try {
        const [stackResult] = await Promise.all([fetchPromise, minDuration]);
        if (ignore) return;
        setResult(stackResult);
        setImageUrl(URL.createObjectURL(stackResult.imageBlob));
        setPhase("result");
      } catch (err) {
        if (ignore || controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : "Stacking failed");
      }
    }

    run();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [selectedVideo]);

  function handleDownload() {
    if (!result) return;
    const url = URL.createObjectURL(result.imageBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedVideo.name.replace(/\.[^.]+$/, "")}_stacked.png`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleBack() {
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    onClear();
  }

  if (error) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-10">
        <p className="text-sm text-destructive">{error}</p>
        <Button variant="ghost" onClick={onClear}>
          Back
        </Button>
      </div>
    );
  }

  if (phase === "result" && result && imageUrl) {
    return (
      <ResultPhase
        fileName={selectedVideo.name}
        result={result}
        imageUrl={imageUrl}
        mode={DEFAULT_STACK_SETTINGS.mode}
        onBack={handleBack}
        onDownload={handleDownload}
      />
    );
  }

  return (
    <ProcessingPhase
      fileName={selectedVideo.name}
      onCancel={onClear}
      fetchDone={fetchDone}
    />
  );
}
