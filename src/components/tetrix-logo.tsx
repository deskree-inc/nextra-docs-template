import Image from "next/image";

export function TetrixLogo({
  className = "",
  ...props
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <div className={`tetrix-logo ${className}`} {...props}>
      {/* Black logo for light theme */}
      <Image
        src="/tetrix-logo-black.svg"
        alt="Tetrix AI"
        width={138}
        height={45}
        priority
        className="block dark:hidden"
      />
      {/* White logo for dark theme */}
      <Image
        src="/tetrix-logo-white.svg"
        alt="Tetrix AI"
        width={138}
        height={45}
        priority
        className="hidden dark:block"
      />
    </div>
  );
}
