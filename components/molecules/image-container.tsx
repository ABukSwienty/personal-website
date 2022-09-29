import { Variants, useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export interface ImageContainerProps {
  children: React.ReactNode;
}

const variants: Variants = {
  initial: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ImageContainer = ({ children }: ImageContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    amount: 1,
    margin: "",
    once: true,
  });

  useEffect(() => {
    if (inView) controls.start("animate");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={controls}
      className="w-fit flex flex-wrap justify-evenly h-full gap-6 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export default ImageContainer;
