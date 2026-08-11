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
import { removeBackgroundGlow } from "./services/removeBackgroundGlow";

type StackerProps = {
  selectedVideo: File;
  onClear: () => void;
  onProceedToEnhance: (file: File) => void;
};

export default function Stacker({
  selectedVideo,
  onClear,
  onProceedToEnhance,
}: StackerProps) {
  const [phase, setPhase] = useState<StackerPhase>("processing");
  const [result, setResult] = useState<StackResult | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fetchDone, setFetchDone] = useState(false);
  const [isRemovingGlow, setIsRemovingGlow] = useState(false);
  const [glowError, setGlowError] = useState<string | null>(null);
  const [glowRemovedBlob, setGlowRemovedBlob] = useState<Blob | null>(null);
  const [glowRemovedUrl, setGlowRemovedUrl] = useState<string | null>(null);

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

  const displayedBlob = glowRemovedBlob ?? result?.imageBlob ?? null;
  const displayedImageUrl = glowRemovedUrl ?? imageUrl;

  function handleDownload() {
    if (!displayedBlob) return;
    const url = URL.createObjectURL(displayedBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedVideo.name.replace(/\.[^.]+$/, "")}_stacked.png`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleBack() {
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    if (glowRemovedUrl) URL.revokeObjectURL(glowRemovedUrl);
    onClear();
  }

  function handleEnhance() {
    if (!displayedBlob) return;
    const file = new File(
      [displayedBlob],
      `${selectedVideo.name.replace(/\.[^.]+$/, "")}_stacked.png`,
      { type: "image/png" },
    );
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    if (glowRemovedUrl) URL.revokeObjectURL(glowRemovedUrl);
    onProceedToEnhance(file);
  }

  async function handleRemoveBackgroundGlow() {
    if (!result) return;
    setIsRemovingGlow(true);
    setGlowError(null);
    try {
      const newBlob = await removeBackgroundGlow(result.imageBlob);
      setGlowRemovedBlob(newBlob);
      setGlowRemovedUrl(URL.createObjectURL(newBlob));
    } catch (err) {
      setGlowError(
        err instanceof Error ? err.message : "Failed to remove background glow",
      );
    } finally {
      setIsRemovingGlow(false);
    }
  }

  function handleRevertBackgroundGlow() {
    if (glowRemovedUrl) URL.revokeObjectURL(glowRemovedUrl);
    setGlowRemovedUrl(null);
    setGlowRemovedBlob(null);
    setGlowError(null);
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

  if (phase === "result" && result && displayedImageUrl) {
    return (
      <ResultPhase
        fileName={selectedVideo.name}
        result={result}
        imageUrl={displayedImageUrl}
        mode={DEFAULT_STACK_SETTINGS.mode}
        onBack={handleBack}
        onDownload={handleDownload}
        onEnhance={handleEnhance}
        onRemoveBackgroundGlow={handleRemoveBackgroundGlow}
        onRevertBackgroundGlow={handleRevertBackgroundGlow}
        isRemovingGlow={isRemovingGlow}
        isGlowRemoved={glowRemovedUrl !== null}
        glowError={glowError}
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
