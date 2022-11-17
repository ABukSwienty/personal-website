import { MotionProps } from "framer-motion";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/global";
import { FramerVariants } from "../../../types/framer-variants";
import AnimatedText from "../../molecules/animated-text";
import WorkWrapper from "../../molecules/work-wrapper";

import mnemoAdd from "../../../public/assets/screen-shots/mnemo/add.webp";
import mnemoContracts from "../../../public/assets/screen-shots/mnemo/contracts.webp";
import mnemoDashboard from "../../../public/assets/screen-shots/mnemo/dash.webp";
import mnemoSearch from "../../../public/assets/screen-shots/mnemo/search.webp";

import rightBook from "../../../public/assets/screen-shots/reRight/book.png";
import rightContracts from "../../../public/assets/screen-shots/reRight/contracts.png";
import rightAuthor from "../../../public/assets/screen-shots/reRight/create-author.png";
import rightCreateContract from "../../../public/assets/screen-shots/reRight/create-contract.png";

import tenEnd from "../../../public/assets/screen-shots/ten4/end.png";
import tenHow from "../../../public/assets/screen-shots/ten4/how.png";
import tenIntro from "../../../public/assets/screen-shots/ten4/intro.webp";
import tenLanding from "../../../public/assets/screen-shots/ten4/landing.webp";

import tailCase from "../../../public/assets/screen-shots/tailwind/case.png";
import tailIntro from "../../../public/assets/screen-shots/tailwind/intro.png";
import tailLanding from "../../../public/assets/screen-shots/tailwind/landing.png";
import tailModal from "../../../public/assets/screen-shots/tailwind/modal.png";

import {
  ENDPOINT_BUILDER,
  MINIMAX,
  MNEMO,
  RE_RIGHT,
  SPRING_UI,
  TAILWIND,
  TEN4,
} from "../../../constants/works";
import SingleWork from "../../molecules/single-work";
import Slider from "../../molecules/slider";
import Title from "../../atoms/title";
import ImgSlideContainer from "../../atoms/img-slide-container";

const ALL_WORKS = [
  TAILWIND,
  MNEMO,
  RE_RIGHT,
  TEN4,
  SPRING_UI,
  ENDPOINT_BUILDER,
  MINIMAX,
];

const smallWorksSlides = ALL_WORKS.map((work, index) => (
  <WorkWrapper isAnimated={false} key={index} size="sm">
    <SingleWork work={work} />
  </WorkWrapper>
));

const SmallWorkSlides = () => {
  return (
    <div className="block sm:hidden">
      <Slider
        notInViewOpacity={0.8}
        slideSize={75}
        mode="snapToCenter"
        offsetBy={0}
        extendSlides={0}
      >
        {smallWorksSlides}
      </Slider>
    </div>
  );
};

const menmoSlides = [mnemoAdd, mnemoContracts, mnemoDashboard, mnemoSearch].map(
  (img, i) => <ImgSlideContainer key={i} img={img} alt="mnemo screenshot" />
);

const reRightSlides = [
  rightBook,
  rightContracts,
  rightAuthor,
  rightCreateContract,
].map((img, i) => (
  <ImgSlideContainer key={i} img={img} alt="reRight screenshot" />
));

const tailwindSlides = [tailLanding, tailIntro, tailCase, tailModal].map(
  (img, i) => <ImgSlideContainer key={i} img={img} alt="tailwind screenshot" />
);

const tenSlides = [tenLanding, tenIntro, tenHow, tenEnd].map((img, i) => (
  <ImgSlideContainer key={i} img={img} alt="tailwind screenshot" />
));

const headingVariants: Partial<FramerVariants> = {
  initial: {
    y: 30,
    opacity: 0,
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

const WorkSection = () => {
  const { workRef } = useContext(GlobalContext);
  return (
    <section ref={workRef} className="h-fit min-h-screen">
      <Title
        size="9xl"
        tag="h2"
        aria-label="My work"
        className="my-8 flex flex-col items-start justify-end overflow-hidden py-2 text-right md:my-32"
      >
        <AnimatedText
          animations={headingVariants}
          viewport={headingViewport}
          mode="char"
          text="my work."
        />
      </Title>
      <SmallWorkSlides />
      <div className="perspective-xl 2x:justify-between hidden w-full flex-row flex-wrap justify-center sm:flex lg:mb-32 lg:justify-evenly">
        <WorkWrapper size="md" viewportAmount={0.5} className="self-center">
          <SingleWork work={MNEMO}>
            {(isReady) => (
              <>
                {isReady && (
                  <Slider
                    slideSize={75}
                    mode="snapToCenterAndInfinite"
                    offsetBy={3}
                    extendSlides={2}
                  >
                    {menmoSlides}
                  </Slider>
                )}
              </>
            )}
          </SingleWork>
        </WorkWrapper>

        <WorkWrapper size="lg" viewportAmount={0.2}>
          <SingleWork work={TAILWIND}>
            {(isReady) => (
              <>
                {isReady && (
                  <Slider
                    slideSize={75}
                    mode="snapToCenterAndInfinite"
                    offsetBy={3}
                    extendSlides={2}
                  >
                    {tailwindSlides}
                  </Slider>
                )}
              </>
            )}
          </SingleWork>
        </WorkWrapper>
      </div>
      <div className="perspective-xl hidden w-full flex-row flex-wrap justify-center sm:flex lg:mb-32 lg:justify-evenly">
        <WorkWrapper size="lg" viewportAmount={0.2}>
          <SingleWork work={TEN4}>
            {(isReady) => (
              <>
                {isReady && (
                  <Slider
                    slideSize={75}
                    mode="snapToCenterAndInfinite"
                    offsetBy={3}
                    extendSlides={2}
                  >
                    {tenSlides}
                  </Slider>
                )}
              </>
            )}
          </SingleWork>
        </WorkWrapper>
        <WorkWrapper size="sm" viewportAmount={0.5} className="self-center">
          <SingleWork work={MINIMAX} />
        </WorkWrapper>
      </div>
      <div className="perspective-xl mb-32 hidden w-full flex-row flex-wrap justify-center sm:flex lg:justify-evenly 2xl:justify-between">
        <WorkWrapper
          size="sm"
          viewportAmount={0.5}
          className="self-center lg:self-start"
        >
          <SingleWork work={ENDPOINT_BUILDER} />
        </WorkWrapper>
        <WorkWrapper
          size="md"
          viewportAmount={0.5}
          className="self-center lg:self-end"
        >
          <SingleWork work={RE_RIGHT}>
            {(isReady) => (
              <>
                {isReady && (
                  <Slider
                    slideSize={75}
                    mode="snapToCenterAndInfinite"
                    offsetBy={3}
                    extendSlides={2}
                  >
                    {reRightSlides}
                  </Slider>
                )}
              </>
            )}
          </SingleWork>
        </WorkWrapper>
        <WorkWrapper
          size="sm"
          viewportAmount={0.5}
          className="self-center lg:self-end"
        >
          <SingleWork work={SPRING_UI} />
        </WorkWrapper>
      </div>
    </section>
  );
};

export default WorkSection;
