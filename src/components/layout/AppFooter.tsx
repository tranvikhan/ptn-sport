import { ROUTES } from "@/constants/routes";
import { NavButton } from "../core/NavButton";
import { AppContainer } from "./AppContainer";

export const AppFooter = () => {
  return (
    <footer className="py-10 md:py-20">
      <AppContainer>
        <div className="flex flex-col gap-16 w-full items-center">
          <ul className="flex flex-wrap list-inside list-disc gap-8 text-gray-600 dark:text-gray-300">
            <li>
              <NavButton path={ROUTES.FOOTBALL}>Football</NavButton>
            </li>
            <li>
              <NavButton path={ROUTES.FO4}>Fifa Online 4</NavButton>
            </li>
            <li>
              <NavButton>Badminton</NavButton>
            </li>
            <li>
              <NavButton>Chess</NavButton>
            </li>
          </ul>
          <span className="block text-gray-500 dark:text-gray-400">
            &copy; 2023 Khan Tran PTN Global
          </span>
        </div>
      </AppContainer>
    </footer>
  );
};
