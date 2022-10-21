import { AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Badge from "../atoms/badge";
import IconSolid from "../atoms/icon/icon-solid";
import Section from "../atoms/section";
import Title from "../atoms/title";
import Carousel from "../molecules/carousel";
import Work from "../molecules/work";
import ScreenShotWrapper from "./screen-shot-wrapper";

const WorkSection = () => {
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
  return (
    <Section
      id="read-more"
      className="relative flex h-fit flex-1 flex-col flex-wrap justify-center gap-4 bg-red-600 py-32 dark:bg-indigo-900"
    >
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
                  The tool is an upgraded version of a previous project. It aims
                  to drastically reduce the admin that comes with managing large
                  amounts of intellectual property.
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
                  positions which are scored from 1 to -1. The minimax function
                  then loops through the positions and returns the best value,
                  adjusting the score in relation to the current depth.
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
                  rights both in terms of sales, contracts and advance payments.
                  Users can create digital records of their sales activty, the
                  contracts they make as well as send invoices through an API
                  connection to a third party invoicing system.
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
  );
};

export default WorkSection;
