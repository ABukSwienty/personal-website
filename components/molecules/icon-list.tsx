import { motion, useAnimationControls, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { FramerVariants } from "../../types/framer-variants";
import setVariants from "../../util/set-variants";

const VARIANTS: Partial<FramerVariants> = {
  initial: {
    x: -10,
  },
  animate: {
    x: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const variants = setVariants([VARIANTS]);

const IconList = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    amount: 0.2,
    once: true,
  });

  const control = useAnimationControls();

  useEffect(() => {
    if (inView) {
      control.start("animate");
    }
  }, [inView, control]);

  return (
    <div className="grid grid-cols-12 space-y-8 border-t border-black py-16 last:border-b dark:border-white xl:space-y-0">
      <p className="col-span-12 self-center text-center font-garamond text-3xl text-black dark:text-white xl:col-span-2 xl:pl-2 xl:text-left">
        {text}
      </p>
      <div
        ref={ref}
        className="col-span-12 h-fit w-full items-center xl:col-span-10 xl:flex xl:flex-row"
      >
        <motion.div
          ref={ref}
          variants={variants}
          animate={control}
          initial="initial"
          className="grid grid-cols-2 justify-evenly sm:grid-cols-4  lg:flex xl:ml-16"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default IconList;
