type PanelHeaderProps = {
  mode: "simple" | "wavelet";
  onModeChange: (mode: "simple" | "wavelet") => void;
};
export default function PanelHeader({ mode, onModeChange }: PanelHeaderProps) {
  return (
    <div className="px-5 pt-5 pb-4 border-b border-border shrink-0">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Sharpen</p>
          <p className="text-[11px] text-muted-foreground mt-1">
            {mode === "simple"
              ? "Single-layer luminance sharpening"
              : "Wavelet decomposition"}
          </p>
        </div>
        <div className="flex bg-muted rounded-lg p-0.75 border border-border gap-0.5">
          <button
            onClick={() => onModeChange("simple")}
            className={`px-3 py-1.25 rounded-md text-[11px] font-semibold transition-all ${
              mode === "simple"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => onModeChange("wavelet")}
            className={`px-3 py-1.25 rounded-md text-[11px] font-semibold transition-all ${
              mode === "wavelet"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Wavelet
          </button>
        </div>
      </div>
    </div>
  );
}
