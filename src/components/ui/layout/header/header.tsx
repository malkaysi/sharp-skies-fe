import heroImg from "@/assets/vite.svg";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between px-8">
      <div className="flex items-center gap-2.5">
        <img src={heroImg} alt="Sharp Skies Logo" className="h-8 w-8" />
        <span className="text-[15px] font-bold tracking-tight">Sharp Skies</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Button variant="ghost" size="sm">Docs</Button>
        <Button variant="ghost" size="sm">Settings</Button>
      </div>
    </header>
  );
}
