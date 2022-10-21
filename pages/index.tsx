import type { NextPage } from "next";
import Button from "../components/atoms/button";
import Section from "../components/atoms/section";
import PageLayout from "../components/templates/page-layout";
import ImageLogo from "../components/atoms/image-logo";
import ImageContainer from "../components/molecules/image-container";
import Title from "../components/atoms/title";
import Text from "../components/atoms/text";
import Head from "next/head";
import LandingSection from "../components/organisms/landing-section";
import WorkSection from "../components/organisms/work-section";

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
  return (
    <PageLayout>
      <Head>
        <title>Alexander Buk-Swienty</title>
      </Head>

      <LandingSection {...props} />

      <WorkSection />

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
