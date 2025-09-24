import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-3xl">
        {/* Optional badge */}
        <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
          🚀 Free & Open Source API Hub
        </Badge>

        {/* Heading */}
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-extrabold tracking-tight">
          Supercharge your apps with{" "}
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free APIs
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 md:text-lg text-muted-foreground leading-relaxed">
          Instantly access ready-to-use APIs for users, products, quotes,
          and more. Explore interactive docs, test endpoints live, and
          accelerate your development.
        </p>

        {/* Call to actions */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Get Started <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-base"
          >
            <CirclePlay className="mr-2 h-5 w-5" />
            Explore APIs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
