import {
  motion,
  MotionProps,
  useAnimationControls,
  useInView,
} from "framer-motion";
import { FC, useContext, useEffect, useRef } from "react";
import framerVariantProps from "../../../constants/framer-variant-props";
import { GlobalContext } from "../../../providers/global";
import { FramerVariants } from "../../../types/framer-variants";
import setVariants from "../../../util/set-variants";
import CLAIcon from "../../atoms/icons/clients/cla";
import ForageIcon from "../../atoms/icons/clients/forage";
import GadsIcon from "../../atoms/icons/clients/gads";
import GutkindIcon from "../../atoms/icons/clients/gutkind";
import LRAIcon from "../../atoms/icons/clients/lra";
import PolitikensIcon from "../../atoms/icons/clients/politikens";
import TailwindCoIcon from "../../atoms/icons/clients/tailwind";
import Ten4Icon from "../../atoms/icons/clients/ten4";
import FramerMotionIcon from "../../atoms/icons/tech/framer";
import NestIcon from "../../atoms/icons/tech/nest";
import NextIcon from "../../atoms/icons/tech/next";
import NodeIcon from "../../atoms/icons/tech/node";
import PrismaIcon from "../../atoms/icons/tech/prisma";
import ReactIcon from "../../atoms/icons/tech/react";
import StorybookIcon from "../../atoms/icons/tech/storybook";
import TailwindIcon from "../../atoms/icons/tech/tailwind";
import TypescriptIcon from "../../atoms/icons/tech/typescript";
import Title from "../../atoms/title";
import AnimatedText from "../../molecules/animated-text";
import IconList from "../../molecules/icon-list";

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

const ICON_VARIANTS: Partial<FramerVariants> = {
  initial: {
    x: -40,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const iconVariants = setVariants([ICON_VARIANTS]);

const Skill = ({
  text,
  icon: Icon,
}: {
  text: string;
  icon: FC<React.ComponentProps<"svg">>;
}) => {
  return (
    <motion.div
      variants={iconVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="mx-4 my-2 flex flex-col items-center justify-center space-y-2"
    >
      <Icon className="h-16 w-16 dark:text-white" />
      <p className="text-center text-sm text-gray-600 dark:text-white">
        {text}
      </p>
    </motion.div>
  );
};

const Client = ({
  text,
  icon: Icon,
  href,
}: {
  text: string;
  icon: FC<React.ComponentProps<"svg">>;
  href: string;
}) => {
  return (
    <motion.a
      variants={iconVariants}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="mx-4 my-2 flex flex-col items-center justify-center space-y-2"
    >
      <Icon className="h-16 w-16 dark:text-white" />
      <span className="text-center text-sm text-gray-600 dark:text-white">
        {text}
      </span>
    </motion.a>
  );
};

const SkillsAndClientsSection = () => {
  const { skillsRef } = useContext(GlobalContext);
  return (
    <section
      ref={skillsRef}
      className="flex h-fit min-h-screen -scroll-m-20 flex-col justify-start pt-8 md:pt-40 lg:justify-between"
    >
      <Title
        size="9xl"
        tag="h2"
        aria-label="Skills and clients"
        className="perspective-xl mx-auto mb-8 h-fit w-fit overflow-hidden py-2"
      >
        <AnimatedText
          animations={headingVariants}
          viewport={headingViewport}
          mode="char"
          text="skills and clients."
        />
      </Title>

      <article>
        <IconList text="technologies I know and use everyday.">
          <Skill text="React" icon={ReactIcon} />
          <Skill text="Next.js" icon={NextIcon} />
          <Skill text="Node.js" icon={NodeIcon} />
          <Skill text="Typescript" icon={TypescriptIcon} />
          <Skill text="Tailwind CSS" icon={TailwindIcon} />
          <Skill text="Storybook" icon={StorybookIcon} />
          <Skill text="Framer Motion" icon={FramerMotionIcon} />
          <Skill text="Nest.js" icon={NestIcon} />
          <Skill text="Prisma" icon={PrismaIcon} />
        </IconList>
      </article>

      <article>
        <IconList text="clients I've worked with.">
          <Client icon={GadsIcon} text="Gads forlag" href="https://gad.dk/" />
          <Client
            icon={PolitikensIcon}
            text="Politikens forlag"
            href="https://www.politikensforlag.dk/"
          />
          <Client
            icon={CLAIcon}
            text="Copenhagen Literary Agency"
            href="https://www.cphla.dk/"
          />
          <Client
            icon={TailwindCoIcon}
            text="Tailwind co."
            href="https://www.tailwind.how/"
          />
          <Client icon={Ten4Icon} text="ten-4" href="https://www.ten4.ink/" />
          <Client
            icon={ForageIcon}
            text="Forage literary"
            href="https://www.forageliterary.com/"
          />

          <Client
            icon={GutkindIcon}
            text="Gutkind"
            href="https://gutkind.dk/"
          />
          <Client
            icon={LRAIcon}
            text="Lars Ringhof agency"
            href="https://ringhof.dk/"
          />
        </IconList>
      </article>
    </section>
  );
};

export default SkillsAndClientsSection;
