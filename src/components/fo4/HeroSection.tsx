import { Button } from "../Button";
import { Container } from "../layout/Container";
import Image from "next/image";
export const FO4HeroSection = () => {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative pt-24 ml-auto">
          <div className="lg:w-2/3 flex flex-col gap-8 items-center mx-auto">
            <Image
              priority
              src="/images/sports/fo4.png"
              alt="Fifa Online 4"
              width={100}
              height={100}
            />
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl text-center">
              Fifa Online 4 - 2023
            </h1>

            <p className="text-gray-700 dark:text-gray-300 text-center">
              Get ready to witness the ultimate clash of virtual titans as PTN
              Global proudly presents the FIFA Online 4 - 2023 Tournament! Brace
              yourself for a thrilling spectacle of skill, strategy, and
              heart-pounding action as the world&apos;s finest virtual
              footballers compete for glory on the grandest stage.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <Button href="#teams" variant="secondary">
                View teams
              </Button>
              <Button href="#matches" variant="primary">
                Go matches schedule
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
