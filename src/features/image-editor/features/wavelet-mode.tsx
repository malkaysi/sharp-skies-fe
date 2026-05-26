import { useState } from "react";
import InfoBox from "../components/wavelet-mode/info-box";
import LayerStrengthBars from "../components/wavelet-mode/layer-strength-bars";
import type { WaveletLayer } from "../types/image-editor";
import LayerCard from "../components/wavelet-mode/layer-card";
import ApplyButton from "../components/wavelet-mode/apply-button";
import ResetButton from "../components/wavelet-mode/reset-button";

const DEFAULT_WAVELET_LAYERS: WaveletLayer[] = [
  { strength: 1.0, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 1.0, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 1.0, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 1.0, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 1.0, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 1.0, denoise: 0.0, clip: 0.0, blend: 1.0 },
];

type WaveletModeProps = {
  onApply: (layers: WaveletLayer[]) => void;
  isProcessing: boolean;
};
export default function WaveletMode({
  onApply,
  isProcessing,
}: WaveletModeProps) {
  const [layers, setLayers] = useState<WaveletLayer[]>(DEFAULT_WAVELET_LAYERS);
  const [activeLayer, setActiveLayer] = useState(0);

  function handleLayerChange(
    index: number,
    key: keyof WaveletLayer,
    value: number,
  ) {
    setLayers((prev) =>
      prev.map((layer, i) =>
        i === index ? { ...layer, [key]: value } : layer,
      ),
    );
  }
  return (
    <>
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        <InfoBox />
        {/* <LayerCountStepper count={layerCount} onChange={setLayerCount} /> */}
        <LayerStrengthBars
          layers={layers}
          activeLayer={activeLayer}
          onSelect={(i) => setActiveLayer(i === activeLayer ? -1 : i)}
        />
        {layers.map((layer, i) => (
          <LayerCard
            key={i}
            index={i}
            layer={layer}
            isActive={i === activeLayer}
            onSelect={() => setActiveLayer(i === activeLayer ? -1 : i)}
            onChange={(key, value) => handleLayerChange(i, key, value)}
          />
        ))}
      </div>

      <div className="px-5 py-4 border-t border-border flex flex-col gap-2 shrink-0">
        <ApplyButton
          onClick={() => onApply(layers)}
          isProcessing={isProcessing}
        />
        <ResetButton
          onClick={() => setLayers(DEFAULT_WAVELET_LAYERS)}
          disabled={isProcessing}
        />
      </div>
    </>
  );
}
