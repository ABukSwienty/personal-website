import { AnimatePresence, useInView } from "framer-motion";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import useNavigateTo from "../../hooks/use-navigate-to";
import { EnvProps } from "../../pages";
import { GlobalContext } from "../../providers/global";
import Button from "../atoms/button";
import Section from "../atoms/section";
import Title from "../atoms/title";
import ContactModal from "../molecules/contact-modal";
import WanderingRogue from "../molecules/wandering-rogue";

const LandingSection = ({ ...props }: EnvProps) => {
  const ref = useRef(null);

  const { setShowBackground } = useContext(GlobalContext);

  const inView = useInView(ref);

  const navigateToReadMore = useNavigateTo("read-more");
  const [showContactModal, setShowContactModal] = useState(false);

  const handleToggleModal = () => setShowContactModal((prev) => !prev);

  const handleCloseModal = useCallback(() => setShowContactModal(false), []);

  useEffect(() => {
    setShowBackground(inView);
  }, [inView, setShowBackground]);

  return (
    <Section
      innerRef={ref}
      id="landing"
      className="relative flex min-h-screen cursor-pointer flex-col justify-center space-y-8 pt-32 pb-16 text-gray-600 dark:text-gray-50 lg:space-y-16"
    >
      <AnimatePresence>
        {showContactModal && (
          <ContactModal env={props} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
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
  );
};

export default LandingSection;
