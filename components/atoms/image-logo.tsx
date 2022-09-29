import Image, { StaticImageData } from "next/image";
import Gads from "../../assets/clients/gads.png";
import Politikens from "../../assets/clients/politikens.png";
import CLA from "../../assets/clients/CLA.webp";
import ECA from "../../assets/clients/ECA.png";
import FL from "../../assets/clients/FL.png";
import Gutkind from "../../assets/clients/Gutkind.jpg";
import LRA from "../../assets/clients/LRA.png";

import nest from "../../assets/technologies/nest.png";
import prisma from "../../assets/technologies/prisma.png";
import react from "../../assets/technologies/react.png";
import next from "../../assets/technologies/next.png";
import tailwind from "../../assets/technologies/tailwind.jpg";
import typescript from "../../assets/technologies/typescript.png";
import framer from "../../assets/technologies/framer.webp";
import node from "../../assets/technologies/node.png";

import { motion, Variants } from "framer-motion";
import setClassName from "../../util/set-class-name";

export interface ImageLogoProps {
  image: keyof typeof imageTable;
  tooltipPlacement?: "top" | "bottom";
  className?: string;
  width?: number;
  height?: number;
}

const imageTable: {
  [key: string]: {
    src: StaticImageData;
    alt: string;
    link?: string;
    tooltip: string;
  };
} = {
  gads: {
    src: Gads,
    alt: "Gads forlag logo",
    tooltip: "Gads forlag",
    link: "https://gad.dk/",
  },
  politikens: {
    src: Politikens,
    alt: "Politikens forlag logo",
    tooltip: "Politikens forlag",
    link: "https://www.politikensforlag.dk/",
  },
  cla: {
    src: CLA,
    alt: "CLA logo",
    tooltip: "Copenhagen Literary Agency",
    link: "https://www.cphla.dk/",
  },
  eca: {
    src: ECA,
    alt: "ECA logo",
    tooltip: "European Collection Agency",
    link: "https://www.ecagency.dk/",
  },
  fl: {
    src: FL,
    alt: "FL logo",
    tooltip: "Forage Literary",
    link: "https://www.forageliterary.com/",
  },
  gutkind: {
    src: Gutkind,
    alt: "Gutkind logo",
    tooltip: "Gutkind",
    link: "https://gutkind.dk/",
  },
  lra: {
    src: LRA,
    alt: "LRA logo",
    tooltip: "Lars Ringhof Agency",
    link: "https://ringhof.dk/",
  },
  nest: {
    src: nest,
    alt: "Nest js logo",
    tooltip: "Nest js",
  },
  next: {
    src: next,
    alt: "Next js logo",
    tooltip: "Next js",
  },
  prisma: {
    src: prisma,
    alt: "Prisma logo",
    tooltip: "Prisma",
  },
  react: {
    src: react,
    alt: "React logo",
    tooltip: "React",
  },
  tailwind: {
    src: tailwind,
    alt: "Tailwind logo",
    tooltip: "Tailwind CSS",
  },
  typescript: {
    src: typescript,
    alt: "Typescript logo",
    tooltip: "Typescript",
  },
  framer: {
    src: framer,
    alt: "Framer motion logo",
    tooltip: "Framer Motion",
  },
  node: {
    src: node,
    alt: "Node js logo",
    tooltip: "Node js",
  },
};

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    x: [-60, 0],
    opacity: 1,
  },
};

const ImageLogo = ({
  image,
  tooltipPlacement = "top",
  width,
  height,
  className = "",
}: ImageLogoProps) => {
  const classNames = setClassName([
    "relative ring-4 ring-indigo-200 dark:ring-indigo-500 shadow-lg flex items-center justify-center rounded-full overflow-hidden cursor-pointer origin-center w-24 h-24 md:w-32 md:h-32",
    className,
  ]);

  if (imageTable[image].link) {
    return (
      <motion.a
        variants={variants}
        href={imageTable[image].link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className={classNames}
      >
        <Image
          src={imageTable[image].src}
          alt={imageTable[image].alt}
          width={width}
          height={height}
          layout="intrinsic"
          loading="lazy"
        />
      </motion.a>
    );
  } else {
    return (
      <motion.div
        variants={variants}
        whileHover={{ scale: 1.1 }}
        className={classNames}
      >
        <Image
          src={imageTable[image].src}
          alt={imageTable[image].alt}
          layout="intrinsic"
          width={width}
          height={height}
          loading="lazy"
        />
      </motion.div>
    );
  }
};

export default ImageLogo;
