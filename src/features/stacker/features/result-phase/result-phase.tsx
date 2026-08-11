import ResultHeader from "./components/result-header";
import ResultSidebar from "./components/result-sidebar";
import type { FrameSelectionMode, StackResult } from "../../types/stacker";

type ResultPhaseProps = {
  fileName: string;
  result: StackResult;
  imageUrl: string;
  mode: FrameSelectionMode;
  onBack: () => void;
  onDownload: () => void;
  onEnhance: () => void;
  onRemoveBackgroundGlow: () => void;
  onRevertBackgroundGlow: () => void;
  isRemovingGlow: boolean;
  isGlowRemoved: boolean;
  glowError: string | null;
};

export default function ResultPhase({
  fileName,
  result,
  imageUrl,
  mode,
  onBack,
  onDownload,
  onEnhance,
  onRemoveBackgroundGlow,
  onRevertBackgroundGlow,
  isRemovingGlow,
  isGlowRemoved,
  glowError,
}: ResultPhaseProps) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ResultHeader
        fileName={fileName}
        onBack={onBack}
        onDownload={onDownload}
      />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 items-center justify-center p-6">
          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <img
              src={imageUrl}
              className="max-h-[70vh] w-full max-w-[96%] rounded-xl object-contain"
            />
          </div>
        </div>

        <ResultSidebar
          result={result}
          mode={mode}
          onDownload={onDownload}
          onEnhance={onEnhance}
          onRemoveBackgroundGlow={onRemoveBackgroundGlow}
          onRevertBackgroundGlow={onRevertBackgroundGlow}
          isRemovingGlow={isRemovingGlow}
          isGlowRemoved={isGlowRemoved}
          glowError={glowError}
        />
      </div>
    </div>
  );
}
