import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "desktop" | "mobile";
}

export function Logo({ className, variant = "desktop" }: LogoProps) {
  const src = variant === "mobile" ? "/brand/logo-mark.svg" : "/brand/logo.svg";
  const alt = "Pinewood Homes";
  const height = variant === "mobile" ? 32 : 40;

  return (
    <Image
      src={src}
      alt={alt}
      width={height * 3}
      height={height}
      className={className}
      priority
    />
  );
}
