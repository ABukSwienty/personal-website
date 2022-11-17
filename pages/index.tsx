import type { NextPage } from "next";
import PageLayout from "../components/templates/page-layout";

import IntroSection from "../components/organisms/sections/intro-section";
import WorkSection from "../components/organisms/sections/work-section";
import { motion } from "framer-motion";
import SkillsAndClientsSection from "../components/organisms/sections/skills-clients-section";
import AboutSection from "../components/organisms/sections/about-section";

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
      <IntroSection />
      <WorkSection />
      <SkillsAndClientsSection />
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
