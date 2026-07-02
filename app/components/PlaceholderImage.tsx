import Image from "next/image";

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
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={fit === "cover" ? "object-cover" : "object-contain"}
      />
    </div>
  );
}
