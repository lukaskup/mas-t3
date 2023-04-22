import Link from "next/link";

interface ButtonProps {
  onClick?: () => void;
  customClassName?: string;
  href?: string;
  children?: JSX.Element | string;
}

export const Button = ({
  onClick,
  customClassName,
  href,
  children,
}: ButtonProps) => {
  const className = `${customClassName} cursor-pointer flex justify-center items-center border border-2 border-black hover:bg-slate-300/10 ease-in-out duration-300 text-gray-900 text-sm rounded-lg w-full p-3`;

  return href ? (
    <Link href={href}>
      <div className={className}>{children}</div>
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
