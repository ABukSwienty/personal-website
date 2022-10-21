import React from "react";
import setClassName from "../../util/set-class-name";

export interface SectionProps extends React.ComponentProps<"section"> {
  innerRef?: React.RefObject<HTMLElement>;
}

const Section = ({
  children,
  className = "",
  innerRef,
  ...rest
}: SectionProps) => {
  const classNames = setClassName([
    "w-full px-8 md:px-32 lg:px-48 xl:px-64 h-fit",
    className,
  ]);
  return (
    <section ref={innerRef} className={classNames} {...rest}>
      {children}
    </section>
  );
};

export default Section;
