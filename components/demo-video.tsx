"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const VIDEO_SRC = "/videos/quro-demo.mp4";

type DemoVideoProps = {
  title: string;
  subtitle: string;
  className?: string;
  size?: "md" | "lg";
};

export function DemoVideo({ title, subtitle, className, size = "lg" }: DemoVideoProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play().catch(() => undefined));
  };

  return (
    <div
      className={cn(
        "glass group relative flex aspect-video items-center justify-center overflow-hidden bg-black/40",
        className,
      )}
    >
      {playing ? (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-contain"
          aria-label="QURO demo: missed call to booking"
        />
      ) : (
        <>
          <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-cyan/10" aria-hidden />
          <button
            type="button"
            onClick={play}
            className="relative flex flex-col items-center gap-4 rounded-2xl p-6 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            aria-label="Play 2-minute demo video"
          >
            <span
              className={cn(
                "flex items-center justify-center rounded-full bg-gradient-to-br from-teal to-cyan text-background shadow-[0_0_50px_-10px_rgba(34,211,238,0.8)] transition-transform group-hover:scale-105",
                size === "lg" ? "h-20 w-20" : "h-14 w-14",
              )}
            >
              <Play className={cn("fill-current", size === "lg" ? "ml-1 h-8 w-8" : "ml-0.5 h-6 w-6")} aria-hidden />
            </span>
            <span className="text-sm font-semibold">{title}</span>
            <span className="text-xs text-muted">{subtitle}</span>
          </button>
        </>
      )}
    </div>
  );
}
