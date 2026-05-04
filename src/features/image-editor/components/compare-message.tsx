type CompareMessageProps = {
  isHolding: boolean;
};

export default function CompareMessage({ isHolding }: CompareMessageProps) {
  return (
    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 pb-4 select-none">
      {isHolding ? (
        "Showing Original"
      ) : (
        <>
          Hold{" "}
          <kbd className="font-mono text-[10px] px-1.5 py-0.5 bg-white/8 rounded text-muted-foreground/80">
            Click
          </kbd>{" "}
          to compare
        </>
      )}
    </p>
  );
}
