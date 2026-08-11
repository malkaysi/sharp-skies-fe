import SliderTooltip from "./slider-tooltip";

type SliderFieldProps = {
  label: string;
  description?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
};

export default function SliderField({
  label,
  description,
  value,
  min,
  max,
  step = 1,
  onChange,
}: SliderFieldProps) {
  const fillPct = ((value - min) / (max - min)) * 100;

  return (
    <div className="px-5 py-3.5">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
          {label}
          {description && <SliderTooltip description={description} />}
        </span>
        <span className="font-mono text-xs font-medium min-w-10 text-right px-1.75 py-0.5 bg-muted rounded border border-border">
          {value.toFixed(2)}
        </span>
      </div>
      <div className="relative w-full h-7 flex items-center">
        <div className="absolute left-0 right-0 h-1 bg-muted rounded-sm top-1/2 -translate-y-1/2 overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-primary to-primary/70 rounded-sm"
            style={{ width: `${fillPct}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
      <div className="flex justify-between mt-0.5">
        <span className="font-mono text-[12px] text-muted-foreground/50">
          {min}
        </span>
        <span className="font-mono text-[12px] text-muted-foreground/50">
          {max}
        </span>
      </div>
    </div>
  );
}
