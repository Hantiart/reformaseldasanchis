import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

export default function Logo({ variant = "dark", className = "", priority = false }: LogoProps) {
  const img = (
    <Image
      src="/images/reformaseldasanchis-logotipo.webp"
      alt="Reformas Elda Sanchis"
      width={197}
      height={50}
      priority={priority}
      className="h-11 w-auto object-contain"
    />
  );

  if (variant === "light") {
    return (
      <div className={`bg-white px-3 py-2 inline-block ${className}`}>
        {img}
      </div>
    );
  }

  return <div className={`inline-block ${className}`}>{img}</div>;
}
