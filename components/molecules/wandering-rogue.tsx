import { motion, useAnimationControls, Variants } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Portal from "../../HOC/portal";
import randomNumInterval from "../../util/random-number";

const variant: Variants = {
  animate: () => ({
    display: "fixed",
    y: randomNumInterval(1, window.innerWidth),
    x: randomNumInterval(1, window.innerHeight),
    transition: {
      duration: randomNumInterval(2, 5),
    },
  }),
};

const WanderingRogue = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const controlShotLeft = useAnimationControls();
  const controlShotRight = useAnimationControls();
  const [isHovering, setIsHovering] = useState(false);

  const moveRogue = () => {
    if (!ref.current) return {};

    const { x, y } = ref.current.getBoundingClientRect();

    return {
      y: randomNumInterval(0, window.innerHeight - y - 10),
      x: randomNumInterval(0, window.innerWidth - x - 10),
      transition: {
        duration: randomNumInterval(2, 5),
      },
    };
  };

  const handleMove = async () => {
    if (!isHovering) {
      controls.start(moveRogue());
      controlShotLeft.start({
        y: ["1vh", "100vh"],
        opacity: [1, 1],
        transition: {
          duration: randomNumInterval(0.3, 1.3),
        },
      });
      await controlShotRight.start({
        y: ["1vh", "100vh"],
        opacity: [1, 1],
        transition: {
          duration: randomNumInterval(0.3, 1.3),
        },
      });
      controlShotLeft.start({
        y: ["100vh", "0vh"],
        opacity: [0, 0],
      });
      controlShotRight.start({
        y: ["100vh", "0vh"],
        opacity: [0, 0],
      });
    }
  };

  return (
    <>
      <motion.div
        variants={variant}
        animate={controls}
        onMouseEnter={() => {
          handleMove();
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        className="relative z-40 ml-4 flex flex-row justify-start pt-2 text-3xl"
        ref={ref}
      >
        👾
        <motion.div
          animate={controlShotLeft}
          className="absolute z-50 mt-10 h-6 w-0.5 rounded-full bg-green-300 opacity-0 shadow-[0px_10px_6px_1px_rgba(187,247,208,1),0px_-10px_6px_1px_rgba(187,247,208,1)] shadow-green-200"
        />
        <motion.div
          animate={controlShotRight}
          className="absolute z-50 mt-10 ml-7 h-6 w-0.5 rounded-full bg-green-300 opacity-0 shadow-[0px_10px_6px_1px_rgba(187,247,208,1),0px_-10px_6px_1px_rgba(187,247,208,1)] shadow-green-200"
        />
      </motion.div>
    </>
  );
};

export default WanderingRogue;
