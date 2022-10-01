import type { NextPage } from "next";
import Button from "../components/atoms/button";
import IconSolid from "../components/atoms/icon/icon-solid";
import Section from "../components/atoms/section";
import PageLayout from "../components/templates/page-layout";
import ImageLogo from "../components/atoms/image-logo";
import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import ImageContainer from "../components/molecules/image-container";
import ContactModal from "../components/molecules/contact-modal";
import Title from "../components/atoms/title";
import Badge from "../components/atoms/badge";
import Work from "../components/molecules/work";
import useNavigateTo from "../hooks/use-navigate-to";
import Carousel from "../components/molecules/carousel";
import Text from "../components/atoms/text";
import WanderingRogue from "../components/molecules/wandering-rogue";
import ScreenShotWrapper from "../components/organisms/screen-shot-wrapper";
import Head from "next/head";

export interface EnvProps {
  env: {
    emailJs: {
      serviceId: string | undefined;
      templateId: string | undefined;
      publicKey: string | undefined;
    };
  };
}

const Home: NextPage<EnvProps> = (props) => {
  const [showContact, setShowContact] = useState(false);

  const [showReRightsScreens, setShowReRightsScreens] = useState(false);
  const [showMnemoScreens, setShowMnemoScreens] = useState(false);

  const handleCloseReRightScreens = useCallback(
    () => setShowReRightsScreens(false),
    []
  );

  const handleOpenReRightScreens = useCallback(
    () => setShowReRightsScreens(true),
    []
  );

  const handleCloseMnemoScreens = useCallback(
    () => setShowMnemoScreens(false),
    []
  );

  const handleOpenMnemoScreens = useCallback(
    () => setShowMnemoScreens(true),
    []
  );

  const navigateToReadMore = useNavigateTo("read-more");

  const handleToggleModal = () => setShowContact((prev) => !prev);

  const handleCloseModal = useCallback(() => setShowContact(false), []);

  return (
    <PageLayout>
      <Head>
        <title>Alexander Buk-Swienty</title>
      </Head>
      <AnimatePresence>
        {showContact && <ContactModal env={props} onClose={handleCloseModal} />}
      </AnimatePresence>
      <AnimatePresence>
        {showReRightsScreens && (
          <ScreenShotWrapper onClose={handleCloseReRightScreens}>
            <ScreenShotWrapper.ScreenShot priority image="reBook" />
            <ScreenShotWrapper.ScreenShot priority image="reContracts" />
            <ScreenShotWrapper.ScreenShot image="reCreateAuthor" />
            <ScreenShotWrapper.ScreenShot image="reCreateContract" />
          </ScreenShotWrapper>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMnemoScreens && (
          <ScreenShotWrapper onClose={handleCloseMnemoScreens}>
            <ScreenShotWrapper.ScreenShot priority image="mnemoAdd" />
            <ScreenShotWrapper.ScreenShot priority image="mnemoContracts" />
            <ScreenShotWrapper.ScreenShot image="mnemoDash" />
            <ScreenShotWrapper.ScreenShot image="mnemoSearch" />
          </ScreenShotWrapper>
        )}
      </AnimatePresence>
      <Section
        id="landing"
        className="relative flex min-h-screen cursor-pointer flex-col justify-center space-y-8 pt-32 pb-16 text-gray-600 dark:text-gray-50 lg:space-y-16"
      >
        <Title
          size="9xl"
          className="font-arsenal font-bold text-red-600 dark:text-red-400"
        >
          Alexander <br /> Buk-Swienty
        </Title>
        <div className="relative mb-8 flex w-fit flex-row items-center text-4xl font-thin lg:text-5xl">
          An ex-literary agent gone rogue <WanderingRogue />
        </div>
        <p className="text-1xl leading-normal text-gray-600 dark:text-gray-50 sm:text-2xl">
          <span className="font-medium text-indigo-400 dark:text-red-400">
            Freelance
          </span>{" "}
          editor // translator // consultant for the publishing industry.
          <br />
          Self-taught{" "}
          <span className="font-medium text-indigo-400 dark:text-red-400">
            WebDev
          </span>{" "}
          and software engineer. <br />I don{"'"}t <i>just</i> watch YouTube
          tutorials.{" "}
          <span className="font-medium text-indigo-400 dark:text-red-400">
            I build stuff
          </span>{" "}
          and maintain web apps people use.
        </p>
        <div className="mt-5 flex flex-row space-x-4">
          <Button
            color="light"
            onClick={navigateToReadMore}
            trailingIcon="arrowSmallDown"
            className="z-20"
          >
            Read more
          </Button>
          <Button
            onClick={handleToggleModal}
            trailingIcon="contact"
            size="lg"
            className="z-20"
          >
            Let&apos;s talk
          </Button>
        </div>
      </Section>
      <Section
        id="read-more"
        className="relative flex h-fit flex-1 flex-col flex-wrap justify-center gap-4 bg-red-600 py-32 dark:bg-indigo-900"
      >
        <div className="6 w-full">
          <Title size="6xl" className="font-arsenal text-indigo-50">
            <span className="italic">Some</span> of my projects.
          </Title>
          <p className="mt-2 mb-16 text-xl font-light text-indigo-50">
            (I{"'"}ll spare you the torture of sifting through all my unfished
            projects...)
          </p>
          <p className="flex flex-row items-center pl-4 text-sm font-medium text-indigo-50">
            <IconSolid icon="arrowRight" className="mr-4" />
            Drag or swipe to see more...{" "}
          </p>
          <Carousel
            id="work-carousel"
            containerClassName="grow py-8 px-4 rounded-lg"
            itemClassName="ml-6 mr-6 first:ml-0 last:mr-64"
          >
            <Work>
              <Work.Header
                title="Rights management 2.0"
                badge={{
                  size: "xs",
                  color: "light",
                  children: "developing",
                }}
              />
              <Work.Body logline="A tool to manage copyright assets. From sales, to contracts to royalties.">
                <div className="space-y-3">
                  <p>
                    The tool is an upgraded version of a previous project. It
                    aims to drastically reduce the admin that comes with
                    managing large amounts of intellectual property.
                  </p>
                  <p>Currently in beta and being tested by literary agents</p>
                  <p>
                    Built in collaboration with{" "}
                    <a
                      href="https://github.com/Vanluren"
                      rel="noreferrer"
                      target="_blank"
                      className="text-blue-700 hover:underline"
                    >
                      @Vanluren
                    </a>
                    {"."}
                  </p>
                </div>
              </Work.Body>
              <Work.Footer>
                <Work.Footer.Item
                  icon="code"
                  href="#"
                  text="Code review on request"
                />
                <Work.Footer.Item
                  icon="photo"
                  onClick={handleOpenReRightScreens}
                  text="Some screenies"
                />
                <div className="flex flex-wrap gap-2">
                  <Badge color="light">NestJs</Badge>
                  <Badge color="light">NextJs</Badge>
                  <Badge color="light">Tailwind</Badge>
                  <Badge color="light">Prisma</Badge>
                  <Badge color="light">PostGres</Badge>
                </div>
              </Work.Footer>
            </Work>
            <Work>
              <Work.Header
                title="Endpoint-builder"
                badge={{
                  size: "xs",
                  children: "complete",
                }}
              />
              <Work.Body logline="A simple tool for creating a typesafe .js file with an object that holds endpoints.">
                <div className="space-y-3">
                  <p>
                    Endpoint builder creates a .js file and .d.ts file of
                    endpoints based on user config options. Endpoints can be
                    strings or typesafe functions. Can read folder dirs for
                    endpoints or paths can be added manually.
                  </p>
                  <p>NodeJs package published to npm.</p>
                </div>
              </Work.Body>
              <Work.Footer>
                <Work.Footer.Item
                  icon="code"
                  href="https://github.com/ABukSwienty/endpoint-builder"
                  text="Check out the code on github"
                />
                <Work.Footer.Item
                  icon="code"
                  href="https://www.npmjs.com/package/endpoint-builder"
                  text="Check out the code on npmjs"
                />
                <div className="flex flex-wrap gap-2">
                  <Badge color="light">Node</Badge>
                  <Badge color="light">Typescript</Badge>
                  <Badge color="light">Webpack</Badge>
                </div>
              </Work.Footer>
            </Work>
            <Work>
              <Work.Header
                title="Minimax-alpha-beta"
                badge={{
                  size: "xs",
                  children: "complete",
                }}
              />
              <Work.Body
                logline="A basic implementation of the minimax algorithm with alpha beta
                pruning for optimization."
              >
                <div className="space-y-3">
                  <p>
                    The code generates a tree of all possible tic tac toe
                    positions which are scored from 1 to -1. The minimax
                    function then loops through the positions and returns the
                    best value, adjusting the score in relation to the current
                    depth.
                  </p>
                </div>
              </Work.Body>
              <Work.Footer>
                <Work.Footer.Item
                  icon="code"
                  href="https://github.com/ABukSwienty/minimax-alpha-beta-typescript"
                  text="Check out the code on github"
                />
                <Work.Footer.Item
                  icon="website"
                  href="https://abukswienty.github.io/minimax-alpha-beta-typescript/"
                  text="Check out the demo"
                />
                <div className="flex flex-wrap gap-2">
                  <Badge color="light">ReactJs</Badge>
                  <Badge color="light">Typescript</Badge>
                </div>
              </Work.Footer>
            </Work>
            <Work>
              <Work.Header
                title="Rights management 1.0"
                badge={{
                  size: "xs",
                  children: "production",
                  color: "success",
                }}
              />
              <Work.Body logline="A tool to manage copyright assets. From sales, to contracts to royalties.">
                <div className="space-y-3">
                  <p>
                    My first large-scale project. The tool helps manage literary
                    rights both in terms of sales, contracts and advance
                    payments. Users can create digital records of their sales
                    activty, the contracts they make as well as send invoices
                    through an API connection to a third party invoicing system.
                  </p>
                  <p>Currently in production</p>
                </div>
              </Work.Body>
              <Work.Footer>
                <Work.Footer.Item
                  icon="code"
                  href="#"
                  text="Code review on request"
                />
                <Work.Footer.Item
                  icon="photo"
                  onClick={handleOpenMnemoScreens}
                  text="Some screenies"
                />
              </Work.Footer>
              <div className="flex flex-wrap gap-2">
                <Badge color="light">PHP</Badge>
                <Badge color="light">jQuery</Badge>
                <Badge color="light">MySQL</Badge>
              </div>
            </Work>
            <Work>
              <Work.Header
                title="This website"
                badge={{
                  size: "xs",
                  children: "production",
                  color: "success",
                }}
              />
              <Work.Body logline="Well... You're looking at it.">
                <div className="space-y-3">
                  <p>Dunno what you expected here!</p>
                </div>
              </Work.Body>
              <Work.Footer>
                <Work.Footer.Item
                  icon="code"
                  href="https://github.com/ABukSwienty/personal-website"
                  text="Check out the code on github"
                />
                <div className="flex flex-wrap gap-2">
                  <Badge color="light">NestJs</Badge>
                  <Badge color="light">Typescript</Badge>
                  <Badge color="light">Tailwind</Badge>
                  <Badge color="light">Framer motion</Badge>
                </div>
              </Work.Footer>
            </Work>
          </Carousel>
        </div>
      </Section>
      <Section className="flex h-full w-full flex-col space-y-20 bg-indigo-100 py-32 dark:bg-indigo-900 dark:text-white md:space-y-48">
        <div className="space-y-8">
          <Title size="6xl" className="font-arsenal">
            People I{" "}
            <span className="text-indigo-600 dark:text-red-400">work</span> for
          </Title>
          <ImageContainer>
            <ImageLogo image="gads" />
            <ImageLogo image="politikens" />
            <ImageLogo width={50} height={80} image="cla" />
            <ImageLogo image="fl" />
            <ImageLogo image="gutkind" />
            <ImageLogo
              width={90}
              height={70}
              image="lra"
              className="bg-white"
            />
            <ImageLogo
              width={90}
              height={50}
              className="bg-white"
              image="eca"
            />
          </ImageContainer>
        </div>
        <div className="space-y-8">
          <Title size="6xl" className="font-arsenal">
            Technologies I{" "}
            <span className="text-indigo-600 dark:text-red-400">use</span>{" "}
            everyday
          </Title>
          <ImageContainer>
            <ImageLogo tooltipPlacement="bottom" image="nest" />
            <ImageLogo tooltipPlacement="bottom" image="next" />
            <ImageLogo
              tooltipPlacement="bottom"
              width={96}
              height={96}
              image="prisma"
            />
            <ImageLogo tooltipPlacement="bottom" image="react" />
            <ImageLogo tooltipPlacement="bottom" image="tailwind" />
            <ImageLogo
              width={70}
              height={70}
              tooltipPlacement="bottom"
              image="typescript"
            />
            <ImageLogo
              tooltipPlacement="bottom"
              width={70}
              height={70}
              image="framer"
            />
            <ImageLogo
              tooltipPlacement="bottom"
              width={112}
              height={112}
              image="node"
            />
          </ImageContainer>
        </div>
      </Section>
      <Section className="flex h-full w-full flex-col justify-center bg-indigo-200 pt-32 pb-48 dark:bg-indigo-900">
        <Title size="6xl" className="mb-8 font-arsenal dark:text-gray-50">
          About me
        </Title>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Text color="gray" size="xl">
            <Text.Paragraph>
              I have a background in comparative literature from Copenhagen
              University. Shortly after graduating, I began work as a literary
              agent, representing Danish authors world-wide.
            </Text.Paragraph>
            <Text.Paragraph>
              <Text.Highlight>I turned to programming in 2019</Text.Highlight>{" "}
              when trying to solve the agency
              {"'"}s data issues.
            </Text.Paragraph>
            <Text.Paragraph>
              Our team was getting bogged down with admin and there were few
              modern tools that could help us. I decided to try and build a tool
              that could help us manage our data and automate some of the more
              tedious tasks.
            </Text.Paragraph>
            <Text.Paragraph>
              After a year and a half of development (using PHP and MySQL),{" "}
              <Text.Highlight>
                I launched a rights management tool
              </Text.Highlight>{" "}
              that could handle everything pertaining to our work with authors,
              contacts, contracts, sales history and even invoicing through an
              API connection to a third party invoicing system.
            </Text.Paragraph>
          </Text>
          <Text color="gray" size="xl" className="flex h-full flex-col">
            <Text.Paragraph>
              I had a knack for it and kept programming by taking a plethora of
              online courses; learning modern frameworks,{" "}
              <Text.Highlight>
                building quadtrees, simulating boids,
              </Text.Highlight>{" "}
              and collaborating with other programmers.
            </Text.Paragraph>
            <Text.Paragraph>
              Taking a leap of faith, I decided to jump ship, go rogue, and
              pursue a career in the tech sector.
            </Text.Paragraph>
            <div className="mt-16 grow pt-8">
              <Button trailingIcon="download" size="lg">
                <a
                  href="/alexander-buk-swienty-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download resume
                </a>
              </Button>
            </div>
          </Text>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      env: {
        emailJs: {
          serviceId: process.env.EMAIL_JS_SERVICE_ID,
          templateId: process.env.EMAIL_JS_TEMPLATE_ID,
          publicKey: process.env.EMAIL_JS_PUBLIC_KEY,
        },
      },
    },
  };
}
