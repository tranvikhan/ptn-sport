import { Container } from "./Container";

export const AppFooter = () => {
  return (
    <footer className="py-10 md:py-20">
      <Container>
        <div className="flex flex-col gap-16 w-full items-center">
          <ul className="flex list-inside list-disc space-x-8 text-gray-600 dark:text-gray-300">
            <li>
              <a href="#" className="transition hover:text-primary">
                Football
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-primary">
                Fifa Online 4
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Badminton
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Chess
              </a>
            </li>
          </ul>
          <span className="block text-gray-500 dark:text-gray-400">
            &copy; 2023 Khan Tran PTN Global
          </span>
        </div>
      </Container>
    </footer>
  );
};
