import Image from "next/image";

export type HandIcon = "bank" | "binoculars" | "bell" | "people" | "pie";

export function IconImg({ name, size = 56, className }: { name: HandIcon; size?: number; className?: string }) {
  return (
    <Image
      src={`/icons/${name}.png`}
      alt=""
      width={size}
      height={size}
      draggable={false}
      // mix-blend-multiply makes the off-white background melt into your cream/white cards
      className={`select-none mix-blend-multiply ${className ?? ""}`}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}