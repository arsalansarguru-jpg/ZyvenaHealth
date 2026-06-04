import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`}>
      <Image
        src="/logo.png"
        alt="Zyvena Health"
        width={180}
        height={56}
        priority={priority}
        className="h-10 w-auto object-contain sm:h-11"
      />
    </Link>
  );
}
