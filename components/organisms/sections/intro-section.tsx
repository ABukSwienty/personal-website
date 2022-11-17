import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";
import React, { useCallback, useContext, useSyncExternalStore } from "react";
import { GlobalContext } from "../../../providers/global";
import Button from "../../atoms/button";
import Title from "../../atoms/title";
import AnimatedText from "../../molecules/animated-text";

const TEXT_VARIANTS: Variants = {
  initial: {
    opacity: 0,
    /* y: -10, */
  },
  animate: {
    opacity: 1,
    /* y: 0, */
    transition: {
      delay: 0.1,
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
};

const ELEMENT_VARIANTS: Variants = {
  initial: {
    opacity: 0,
    y: -60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const MotionElements = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={ELEMENT_VARIANTS}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

const IntroSection = () => {
  const { loadingScreenStore, introRef, modalStore } =
    useContext(GlobalContext);

  const animationComplete = useSyncExternalStore(
    loadingScreenStore.subscribe,
    () => loadingScreenStore.get().animationComplete,
    () => loadingScreenStore.get().animationComplete
  );

  const handleShowModal = useCallback(
    () =>
      modalStore.set({
        show: true,
      }),
    [modalStore]
  );

  return (
    <section
      ref={introRef}
      className="flex h-fit min-h-screen flex-col justify-evenly xl:justify-between"
    >
      <motion.div
        variants={TEXT_VARIANTS}
        initial="initial"
        animate={animationComplete ? "animate" : "initial"}
        className="mt-16 w-full space-y-2 overflow-hidden font-garamond text-2xl text-black transition-colors duration-300 ease-in-out dark:text-white sm:mt-32 md:w-4/5 2xl:w-1/2 xs:space-y-8 xs:text-4xl"
      >
        <p>
          An <span className="font-garamond italic">ex-literary</span> agent
          gone rogue.
        </p>
        <p>
          Freelance web dev, editor, translator, and consultant for the
          publishing industry.
        </p>
        <p>
          Self taught web dev and software engineer. I don{"'"}t just watch
          YouTube tutorials. I build stuff and maintain web apps people use.
        </p>
        <div className="flex flex-row items-center space-x-12 overflow-hidden py-4 md:space-x-24 xl:py-8">
          <MotionElements>
            <ArrowDownIcon className="h-6 w-6 text-black dark:text-white xs:h-12 xs:w-12" />
          </MotionElements>
          <MotionElements>
            <Button
              onClick={handleShowModal}
              size="lg"
              trailingIcon={ArrowUpRightIcon}
            >
              get in touch
            </Button>
          </MotionElements>
        </div>
      </motion.div>

      <Title
        color="dark"
        size="9xl"
        className="flex flex-col items-end justify-end pb-16 text-right lg:pb-12 xl:pb-2"
        aria-label="Alexander Buk-Swienty"
      >
        <div className="overflow-hidden">
          {animationComplete && <AnimatedText mode="char" text="alexander" />}
        </div>
        <div className="overflow-hidden py-2">
          {animationComplete && (
            <AnimatedText mode="char" text="buk-swienty." />
          )}
        </div>
      </Title>
    </section>
  );
};

export default IntroSection;
