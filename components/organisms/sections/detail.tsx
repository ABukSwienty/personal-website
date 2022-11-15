import ImageLogo from "../../atoms/image-logo";
import Section from "../../atoms/section";
import Title from "../../atoms/title";
import ImageContainer from "../../molecules/image-container";

const DetailSection = () => {
  return (
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
          <ImageLogo width={90} height={70} image="lra" className="bg-white" />
          <ImageLogo width={90} height={50} className="bg-white" image="eca" />
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
  );
};

export default DetailSection;
