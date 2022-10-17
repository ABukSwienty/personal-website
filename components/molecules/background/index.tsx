import { useCallback, useContext, useEffect, useState } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";
import { BackgroundContext, BackgroundProvider } from "./provider";
import { pubSubSquares } from "./pub-sub";
import randomNumInterval from "../../../util/random-number";
import getRandomItemFromArray from "../../../util/random-item-from-array";

// indigo-200 red-600 yellow-300
const colors = ["199, 210, 254", "220, 38, 38", "253, 224, 71"];
const variants: Variants = {
  initial: {
    scale: 0.9,
  },
  animate: () => ({
    backgroundColor: `rgba(${getRandomItemFromArray(
      colors
    )},${randomNumInterval(0.1, 0.4)})`,
    scale: 0.9,
  }),
  exit: () => ({
    backgroundColor: `rgba(${getRandomItemFromArray(colors)},0)`,
    scale: randomNumInterval(0.1, 0.4),
    transition: {
      duration: randomNumInterval(0.2, 0.5),
    },
  }),
  hover: () => ({
    y: randomNumInterval(-10, 10),
    x: randomNumInterval(-10, 10),
  }),
};

export const BackgroundItem = ({ id }: { id: string }) => {
  const controls = useAnimationControls();
  const { handlePublish, squareSize, delay, amount } =
    useContext(BackgroundContext);

  const handleAnimate = useCallback(async () => {
    await controls.start("animate");
    setTimeout(() => {
      controls.start("exit");
    }, randomNumInterval(2000, delay));
  }, [controls, delay]);

  const handleClick = () => {
    handleAnimate();
    handlePublish(+id);
  };

  useEffect(() => {
    pubSubSquares.subscribe(id, handleAnimate);
  }, [handleAnimate, id]);

  useEffect(() => {
    if (Math.random() > 0.95) handleAnimate();
  }, [handleAnimate]);

  return (
    <div className="grow" onClick={handleClick}>
      <motion.div
        variants={variants}
        animate={controls}
        whileHover="hover"
        id={id}
        className="rounded-lg"
        style={{ width: `${squareSize}px`, height: `${squareSize}px` }}
      ></motion.div>
    </div>
  );
};

const Component = ({ wrapperId }: { wrapperId: string }) => {
  const [styles, setStyles] = useState<React.CSSProperties>({});
  const { renderables } = useContext(BackgroundContext);

  useEffect(() => {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    const { width, height } = wrapper.getBoundingClientRect();
    setStyles({ width, height: wrapper.offsetHeight });
  }, [renderables, wrapperId]);

  return (
    <div
      className="absolute left-0 z-10 flex h-full w-screen grow cursor-pointer flex-wrap overflow-hidden"
      style={{
        ...styles,
      }}
    >
      {renderables}
    </div>
  );
};

const Background = ({ wrapperId }: { wrapperId: string }) => {
  return (
    <BackgroundProvider wrapperId={wrapperId}>
      <Component wrapperId={wrapperId} />
    </BackgroundProvider>
  );
};

export default Background;
