import {
  AnimatePresence,
  motion,
  useDragControls,
  useInView,
} from "framer-motion";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import setClassName from "../../util/set-class-name";

export interface CarouselProps {
  children: React.ReactNode;
  id: string;
  containerClassName?: string;
  itemClassName?: string;
}

const CarouselItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <motion.div className={className}>{children}</motion.div>;
};

export const Carousel = ({
  children,
  containerClassName = "",
  itemClassName = "",
}: CarouselProps) => {
  const [containerKey, setContainerKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [leftConstraint, setLeftConstraint] = useState(0);

  const containerClassNames = setClassName([
    "overflow-hidden h-fit",
    containerClassName,
  ]);

  const itemClassNames = setClassName(["h-fit w-fit", itemClassName]);

  const items = useMemo(
    () =>
      React.Children.toArray(children).map((child, index) => {
        return (
          <CarouselItem key={index} className={itemClassNames}>
            {child}
          </CarouselItem>
        );
      }),
    [children, itemClassNames]
  );

  const handleLeftConstraint = useCallback(() => {
    if (containerRef.current && innerRef.current) {
      setLeftConstraint(
        containerRef.current.scrollWidth -
          containerRef.current.offsetWidth +
          (containerRef.current.scrollWidth - innerRef.current.scrollWidth)
      );
    }
  }, []);

  useEffect(() => {
    handleLeftConstraint();
  }, [handleLeftConstraint]);

  useEffect(() => {
    const handleResize = () => {
      setContainerKey((prev) => prev + 1);
      handleLeftConstraint();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleLeftConstraint]);

  return (
    <motion.div
      ref={containerRef}
      key={containerKey}
      className={containerClassNames}
    >
      <motion.div
        ref={innerRef}
        drag="x"
        dragConstraints={{ right: 0, left: -leftConstraint }}
        whileTap={{ cursor: "grabbing" }}
        className="flex cursor-grab"
      >
        {items}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
