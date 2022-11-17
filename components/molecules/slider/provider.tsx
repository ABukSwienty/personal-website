import { Variant } from "framer-motion";
import { createContext, useRef } from "react";

export interface SliderContextInterface {
  root: React.RefObject<HTMLDivElement>;
  size: number;
  notInViewOpacity?: number;
}

export const SliderContext = createContext<SliderContextInterface>({
  root: { current: null },
  size: 0,
});

const SliderProvider = ({
  children,
  size,
  notInViewOpacity,
}: {
  children: React.ReactNode;
  size: number;
  notInViewOpacity?: number;
}) => {
  if (size > 100) throw Error("Slide size can not excede 100%");
  const root = useRef(null);
  return (
    <SliderContext.Provider value={{ root, size, notInViewOpacity }}>
      {children}
    </SliderContext.Provider>
  );
};

export default SliderProvider;
