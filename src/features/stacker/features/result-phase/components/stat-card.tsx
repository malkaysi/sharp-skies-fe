type StatCardProps = {
  label: string;
  value: string | number;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-[10px] border border-border bg-card p-3">
      <div className="mb-1.5 font-mono text-[10px] text-muted-foreground">
        {label}
      </div>
      <div className="font-mono text-xl font-bold">{value}</div>
    </div>
  );
}
