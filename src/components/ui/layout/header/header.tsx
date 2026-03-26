import heroImg from "@/assets/vite.svg";

export default function Header() {
  return (
    <header className="flex h-12 shrink-0 items-center gap-2 px-4 bg-background border-slate-300">
      <img src={heroImg} alt="Sharp Skies Logo" className="h-8 w-8" />
    </header>
  );
}
