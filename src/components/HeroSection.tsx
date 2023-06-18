import { Container } from "./Container";

export const HeroSection = () => {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h2 className="text-gray-900 dark:text-white font-medium text-1xl md:text-2xl xl:text-3xl">
              Welcome to PTN Global Sports
            </h2>
            <h1 className="mt-8 text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Where Champions are Made!
            </h1>

            <p className="mt-8 text-gray-700 dark:text-gray-300">
              At PTN GLOBAL SPORT, we believe in the power of sports to
              transform lives and inspire greatness. Whether you&apos;re a
              professional athlete, a passionate sports enthusiast, or someone
              just starting their athletic journey, we&apos;re here to help you
              unlock your full potential and achieve extraordinary feats.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="#sports"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get started
                </span>
              </a>
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Learn more
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
