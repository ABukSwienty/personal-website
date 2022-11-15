import type { NextPage } from "next";
import PageLayout from "../components/templates/page-layout";
import Head from "next/head";
import IntroSection from "../components/organisms/sections/intro";
import WorkSection from "../components/organisms/sections/work";
import DetailSection from "../components/organisms/sections/detail";
import AboutSection from "../components/organisms/sections/about";

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

      <IntroSection props={props} />

      <WorkSection />

      <DetailSection />

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
