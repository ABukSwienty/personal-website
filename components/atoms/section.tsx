import React from "react";
import setClassName from "../../util/set-class-name";

export interface SectionProps extends React.ComponentProps<"section"> {}

const Section = ({ children, className = "", ...rest }: SectionProps) => {
  const classNames = setClassName([
    "w-full px-8 md:px-32 lg:px-48 xl:px-64 h-fit",
    className,
  ]);
  return (
    <section className={classNames} {...rest}>
      {children}
    </section>
  );
};

export default Section;
