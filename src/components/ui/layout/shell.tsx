export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex h-full flex-1 flex-col rounded-xl bg-background min-h-0">
        {children}
      </div>
    </div>
  );
}
