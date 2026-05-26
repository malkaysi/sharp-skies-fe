import InfoBox from "../components/wavelet-mode/info-box";
import LayerStrengthBars from "../components/wavelet-mode/layer-strength-bars";
import type { WaveletLayer } from "../types/image-editor";

const DEFAULT_WAVELET_LAYERS: WaveletLayer[] = [
  { strength: 1.5, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 1.3, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 1.1, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 0.8, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 0.5, denoise: 0.0, clip: 0.0, blend: 1.0 },
  { strength: 0.3, denoise: 0.0, clip: 0.0, blend: 1.0 },
];

export default function WaveletMode() {
  return (
    <div>
      <InfoBox />
      {/* <LayerCountStepper count={layerCount} onChange={setLayerCount} /> */}
      <LayerStrengthBars
        layers={DEFAULT_WAVELET_LAYERS}
        activeLayer={0}
        onSelect={() => {}}
      />
    </div>
  );
}
