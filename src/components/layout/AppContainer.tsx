import { ReactNode } from "react";

export interface AppContainerProps {
  children: ReactNode;
}
export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">{children}</div>
  );
};
