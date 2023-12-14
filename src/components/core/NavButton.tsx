"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export interface NavButtonProps {
  path?: string;
  children?: ReactNode;
}
export const NavButton = ({ path, children }: NavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <a
      href={path ?? "#"}
      className={`transition hover:text-primary ${
        isActive ? "text-primary" : "text-gray-600 dark:text-gray-300"
      }`}
    >
      <span>{children}</span>
    </a>
  );
};
