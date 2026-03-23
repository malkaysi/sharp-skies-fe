export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/60 md:min-h-min">
        {children}
      </div>
    </div>
  );
}
