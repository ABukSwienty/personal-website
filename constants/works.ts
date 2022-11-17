export type StatusT = "production" | "development";

export type WorkT = {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: StatusT;
  codeLink: string | undefined;
  liveLink: string | undefined;
};

const TAILWIND: WorkT = {
  title: "Tailwind Co.",
  description: "A landing page for Tailwind Co.",
  longDescription:
    "Designed, developed, and deployed this landing page for the client in little under a week. Features simple but effective animations and a clean design along with a contact form powered by NodeMailer.",
  technologies: [
    "React",
    "Tailwind CSS",
    "NextJs",
    "TypeScript",
    "Framer Motion",
  ],
  status: "production",
  codeLink: "https://github.com/ABukSwienty/tailwind",
  liveLink: "https://TAILWIND.how",
};

const TEN4: WorkT = {
  title: "Ten4",
  description: "A landing page for Ten4.",
  longDescription:
    "Ten4 works with Recommendation Media (Tik Tok), and wanted something loud and fun for their showcase. Desigened in collaboration with the client and deployed to Vercel. Video hosting on cloudinary.",
  technologies: [
    "React",
    "Tailwind CSS",
    "NextJs",
    "TypeScript",
    "Framer Motion",
  ],
  status: "production",
  codeLink: "https://github.com/ABukSwienty/ten-four",
  liveLink: "https://TEN4.ink",
};

const RE_RIGHT: WorkT = {
  title: "reRight",
  description:
    "A tool to manage copyright assets. From sales, to contracts, to royalties.",
  longDescription:
    "This tool is an upraged version of Mnemosyne. It aims to drastically reduce the admin that comes with managing large amounts of intellectual property. It is currently in development. Built in collaboration with @Vanluren.",
  technologies: [
    "React",
    "Tailwind CSS",
    "NextJs",
    "TypeScript",
    "Prisma",
    "NestJs",
    "PostGres",
  ],
  status: "development",
  codeLink: undefined,
  liveLink: undefined,
};

const ENDPOINT_BUILDER: WorkT = {
  title: "Endpoint Builder",
  description:
    "A simple tool for creating a typesafe .js file with an object that holds endpoints.",
  longDescription:
    "Endpoint builder cretes a .js file and a .d.ts fil of endpoints based on user configuration. Endpoints can be strings or typesafe functions. Can read folder dirs for endpoints or paths can be added manually. Published on NPM.",
  technologies: ["NodeJs", "TypeScript"],
  status: "production",
  codeLink: "https://github.com/ABukSwienty/endpoint-builder",
  liveLink: undefined,
};

const MINIMAX: WorkT = {
  title: "Minimax-alpha-beta",
  description:
    "A basic implementation of the MINIMAX algorithm with aplha-beta pruning.",
  longDescription:
    "The code generates a tree of all possible tic tac toe positions which are scored from 1 to -1. The MINIMAX function then loops through the positions and returns the best value, adjusting the score in relation to the current depth.",
  technologies: ["ReactJs", "TypeScript", "Tailwind CSS"],
  status: "production",
  codeLink: "https://github.com/ABukSwienty/minimax-alpha-beta-typescript",
  liveLink: "https://abukswienty.github.io/minimax-alpha-beta-typescript/",
};

const SPRING_UI: WorkT = {
  title: "Spring UI",
  description: "A UI library for ReactJs",
  longDescription:
    "Used in tandem with reRight. A basic UI library built with Framer Motion.",
  technologies: [
    "ReactJs",
    "TypeScript",
    "Framer Motion",
    "Storybook",
    "Tailwind CSS",
  ],
  status: "development",
  codeLink: "https://github.com/ABukSwienty/spring-ui",
  liveLink: "https://master--6350216045d215a15e307413.chromatic.com/",
};

const MNEMO: WorkT = {
  title: "Mnemosyne",
  description:
    "A tool to manage copyright assets. From sales, to contracts, to royalties.",
  longDescription:
    "My first large-scale project. This tool helps manage literary rights both in terms of sales, contracts, and advance payments. Useres can create digital records of their sales activity, their contracts as well as invoicing through an API connection to a third party.",
  technologies: ["PHP", "jQuery", "MySQL"],
  status: "production",
  codeLink: undefined,
  liveLink: undefined,
};

export {
  TAILWIND,
  TEN4,
  RE_RIGHT,
  ENDPOINT_BUILDER,
  MINIMAX,
  SPRING_UI,
  MNEMO,
};
