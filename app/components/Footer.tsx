import Image from "next/image";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-white">
      <div className="relative mx-auto aspect-[1440/287] w-full max-w-[1440px]">
        <Image
          src="/icons/zikorra-wordmark@3x.png"
          alt="Zikorra"
          fill
          sizes="(min-width: 1440px) 1440px, 100vw"
          className="object-contain"
        />
      </div>
    </footer>
  );
}
