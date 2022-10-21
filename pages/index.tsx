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
import DetailsSection from "../components/organisms/details-section";
import AboutSection from "../components/organisms/about-section";

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

      <DetailsSection />

      <AboutSection />
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
