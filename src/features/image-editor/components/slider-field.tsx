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
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <p className="text-xs font-medium">{label}</p>
          {description && <SliderTooltip description={description} />}
        </div>

        <span className="text-xs text-muted-foreground">
          {value.toFixed(2)}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
