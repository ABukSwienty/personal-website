import { MotionProps } from "framer-motion";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/global";
import { FramerVariants } from "../../../types/framer-variants";
import AnimatedText from "../../molecules/animated-text";

const headingVariants: Partial<FramerVariants> = {
  initial: {
    y: 40,
    opacity: 1,
  },
  animate: {},
  inView: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.02,
      ease: "easeInOut",
    },
  }),
};

const headingViewport: MotionProps["viewport"] = {
  once: true,
};

const AboutSection = () => {
  const { aboutRef } = useContext(GlobalContext);
  return (
    <section ref={aboutRef} className="grid h-fit min-h-fit grid-cols-12 py-32">
      <div className="col-span-12 mx-auto place-self-end overflow-hidden lg:col-span-6">
        <h2 className="h-fit overflow-hidden py-2 text-7xl text-black dark:text-white md:text-9xl 2xl:text-[12rem]">
          <AnimatedText
            animations={headingVariants}
            viewport={headingViewport}
            mode="char"
            text="about."
          />
        </h2>
      </div>
      <article className="col-span-12 text-justify font-garamond text-xl font-medium text-black dark:text-white lg:col-span-6">
        <div className="mx-auto w-full space-y-6 md:w-1/2 lg:w-4/5 2xl:w-1/2">
          <p>
            I have a background in comparative literature from Copenhagen
            University. Shortly after graduating, I began work as a literary
            agent, representing Danish authors world-wide.
          </p>
          <p>
            I turned to programming in 2019 when trying to solve the agency{"'"}
            s data issues. Our team was getting bogged down with admin and there
            were few modern tools that could help us. I decided to try and build
            a tool that could help us manage our data and automate some of the
            more tedious tasks.
          </p>
          <p>
            After a year and a half of development (using PHP and MySQL), I
            launched a rights management tool that could handle everything
            pertaining to our work with authors, contacts, contracts, sales
            history and even invoicing through an API connection to a third
            party invoicing system.
          </p>
          <p>
            I had a knack for it and kept programming by taking a plethora of
            online courses; learning modern frameworks, building quadtrees,
            simulating boids, and collaborating with other programmers. Taking a
            leap of faith, I decided to jump ship, go rogue, and pursue a career
            in the tech sector.
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
