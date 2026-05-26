import { useState } from "react";
import InfoBox from "../components/wavelet-mode/info-box";
import LayerCountStepper from "../components/wavelet-mode/layer-count-stepper";

export default function WaveletMode() {
  const [layerCount, setLayerCount] = useState(6);

  return (
    <div>
      <InfoBox />
      <LayerCountStepper count={layerCount} onChange={setLayerCount} />
    </div>
  );
}
