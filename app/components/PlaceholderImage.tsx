"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";

export default function PlaceholderImage({
  src,
  alt,
  className = "",
  rounded = "rounded-xl",
  sizes = "240px",
  fit = "cover",
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  sizes?: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200">
        <ImageIcon className="h-1/3 w-1/3 text-white/70" aria-hidden />
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`relative ${fit === "cover" ? "object-cover" : "object-contain"}`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
