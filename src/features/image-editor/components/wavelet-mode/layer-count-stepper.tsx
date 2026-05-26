const MIN_LAYERS = 2;
const MAX_LAYERS = 6;

type LayerCountStepperProps = {
  count: number;
  onChange: (count: number) => void;
};

export default function LayerCountStepper({
  count,
  onChange,
}: LayerCountStepperProps) {
  return (
    <div className="px-5 py-3 border-b border-border flex items-center justify-between">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        Decomposition Layers
      </span>
      <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
        <button
          onClick={() => onChange(Math.max(MIN_LAYERS, count - 1))}
          disabled={count <= MIN_LAYERS}
          className="w-5 h-5 rounded border border-border bg-muted text-muted-foreground flex items-center justify-center hover:text-foreground hover:bg-muted/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          −
        </button>
        <span className="text-foreground w-3 text-center">{count}</span>
        <button
          onClick={() => onChange(Math.min(MAX_LAYERS, count + 1))}
          disabled={count >= MAX_LAYERS}
          className="w-5 h-5 rounded border border-border bg-muted text-muted-foreground flex items-center justify-center hover:text-foreground hover:bg-muted/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
}
