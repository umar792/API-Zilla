"use client";

import {DotPattern} from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Particles } from "./ui/particles";

export const BackgroundPattern = () => {
  const { resolvedTheme } = useTheme();
  const isLightTheme = resolvedTheme === "light";

  return (
    <>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "mask-[radial-gradient(ellipse,rgba(0,0,0,0.5)_30%,black_80%)]",
          "dark:fill-slate-950"
        )}
      />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={isLightTheme ? "#000" : "#fff"}
        refresh
      />
    </>
  );
};
