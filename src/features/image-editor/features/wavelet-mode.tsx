import { useState } from "react";
import InfoBox from "../components/wavelet-mode/info-box";
import LayerStrengthBars from "../components/wavelet-mode/layer-strength-bars";
import type { WaveletLayer } from "../types/image-editor";
import LayerCard from "../components/wavelet-mode/layer-card";

const DEFAULT_WAVELET_LAYERS: WaveletLayer[] = [
  { strength: 1.5, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 1.3, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 1.1, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 0.8, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 0.5, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 0.3, denoise: 0.0, clip: 0.0, blend: 1.0 },
];

export default function WaveletMode() {
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
    <div>
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
  );
}
