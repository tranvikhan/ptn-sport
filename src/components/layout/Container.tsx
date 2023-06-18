import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">{children}</div>
  );
};
