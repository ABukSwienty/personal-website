import { motion } from "framer-motion";
import React from "react";

import { OmitFramerProps } from "../../types/omit-framer-props";
import { Sizes } from "../../types/sizes";
import setClasses from "../../util/set-classes";

export interface WorkWrapperProps
  extends Omit<React.ComponentPropsWithoutRef<"article">, OmitFramerProps> {
  size: keyof typeof workSizes;
  viewportAmount?: number;
  isAnimated?: boolean;
}

const workSizes: Pick<Sizes, "sm" | "md" | "lg"> = {
  sm: "w-96 h-96",
  md: "h-96 w-96 md:h-[30rem] md:w-[30rem] lg:h-[28rem] lg:w-[28rem] 2xl:h-[35rem] 2xl:w-[35rem]",
  lg: "h-96 w-96 md:h-[30rem] md:w-[30rem] lg:h-[34rem] lg:w-[34rem] 2xl:h-[40rem] xl:w-[40rem]",
};

const mass = {
  sm: 2,
  md: 4,
  lg: 6,
};

const WorkWrapper = React.forwardRef<HTMLElement, WorkWrapperProps>(
  (
    {
      size,
      className,
      children,
      viewportAmount: amount = 0.1,
      isAnimated = true,
      ...rest
    },
    ref
  ) => {
    const classNames = setClasses([
      workSizes[size],
      className,
      "relative rounded-xl bg-gray-900 shadow-md overflow-scroll my-8 2xl:my-0 min-h-fit",
    ]);

    const animatedProps = isAnimated
      ? {
          initial: {
            y: 300,
            rotateX: 5,
            opacity: 0,
          },
          whileInView: {
            opacity: 1,
            rotateX: 0,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 80,
              velocity: 1,
              mass: mass[size],
            },
            zIndex: 1,
          },
          viewport: {
            amount,
            once: true,
          },
        }
      : {};

    return (
      <motion.article
        ref={ref}
        {...animatedProps}
        className={classNames}
        {...rest}
      >
        {children}
      </motion.article>
    );
  }
);

WorkWrapper.displayName = "WorkWrapper";

export default WorkWrapper;
