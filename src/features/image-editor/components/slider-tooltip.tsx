import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

type SliderTooltipProps = {
  description: string;
};

export default function SliderTooltip({ description }: SliderTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <span className="text-muted-foreground">
          <Info className="h-3 w-3" />
        </span>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs text-xs">
        {description}
      </TooltipContent>
    </Tooltip>
  );
}
