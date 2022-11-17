import { motion, MotionProps } from "framer-motion";
import { useMemo } from "react";
import framerVariantProps from "../../constants/framer-variant-props";
import { FramerVariants } from "../../types/framer-variants";

import injectArray from "../../util/injectArray";
import setClasses from "../../util/set-classes";
import setVariants from "../../util/set-variants";

interface AnimatedTextProps {
  mode?: "word" | "char";
  text: string;
  animations?: Partial<FramerVariants>;
  className?: string;
  viewport?: MotionProps["viewport"];
}

const ANIMATED_TEXT_VARIANTS: Partial<FramerVariants> = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.02,
      ease: "easeInOut",
    },
  }),
};

const strategy = (
  mode: AnimatedTextProps["mode"],
  text: string,
  animations?: Partial<FramerVariants>,
  viewport?: AnimatedTextProps["viewport"]
) => {
  const variants = setVariants([ANIMATED_TEXT_VARIANTS, animations]);

  switch (mode) {
    case "word":
      const words = text.split(" ");
      const array = words.map((word, index) => (
        <motion.span
          key={word + "_word_" + index}
          custom={index}
          variants={variants}
          {...framerVariantProps}
          className="inline-block"
          viewport={viewport}
        >
          {word}
        </motion.span>
      ));
      return injectArray(
        array,
        () => (
          <motion.span
            key={Math.random().toString(36).substring(2, 9)}
            variants={variants}
            {...framerVariantProps}
            className="inline-block"
            viewport={viewport}
          >
            {"\u00A0"}
          </motion.span>
        ),
        true
      );
    case "char":
      const chars = text.split("");
      return chars.map((char, index) => (
        <motion.span
          key={char + "_char_" + index}
          custom={index}
          variants={variants}
          {...framerVariantProps}
          className="inline-block"
          viewport={viewport}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
  }
};

const AnimatedText = ({
  text,
  mode = "char",
  animations,
  className,
  viewport,
}: AnimatedTextProps) => {
  const renderables = useMemo(
    () => strategy(mode, text, animations, viewport),
    [mode, text, animations, viewport]
  );
  const classNames = setClasses(["inline-block relative", className]);
  return <div className={classNames}>{renderables}</div>;
};

export default AnimatedText;
