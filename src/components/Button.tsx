import { ReactNode, useMemo } from "react";

export interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children?: ReactNode;
}
export const Button = ({
  href,
  onClick,
  variant = "primary",
  children,
}: ButtonProps) => {
  const className = useMemo(() => {
    switch (variant) {
      case "primary":
        return {
          a: "relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max",
          span: "relative text-base font-semibold text-white",
        };
      case "secondary":
        return {
          a: "relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max",
          span: "relative text-base font-semibold text-primary dark:text-white",
        };
    }
  }, [variant]);

  if (href) {
    return (
      <a href={href} className={className?.a}>
        <span className={className?.span}>{children}</span>
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className?.a}>
      <span className={className?.span}>{children}</span>
    </button>
  );
};
