import { ArrowUpRightIcon, MoonIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import React, { useCallback, useContext } from "react";
import useNavTo from "../../hooks/use-nav-to";
import { GlobalContext } from "../../providers/global";
import DarkModeToggle from "../atoms/dark-mode-toggle";
import GitHubIcon from "../atoms/github";
import LinkedInIcon from "../atoms/linked-in";
import LoadingScreen from "../atoms/loading-screen";
import NavHider from "../atoms/nav-hider";
import ContactModal from "../molecules/contact-modal";
import MobileNav from "../molecules/mobile-nav";
import Nav from "../molecules/nav";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    workRef,
    skillsRef,
    aboutRef,
    navHideStore,
    modalStore,
    mobileNavStore,
  } = useContext(GlobalContext);

  const workNav = useNavTo(workRef);
  const skillsNav = useNavTo(skillsRef);
  const aboutNav = useNavTo(aboutRef);

  const handleNavWork = useCallback(() => {
    navHideStore.set({
      show: true,
      callback: workNav,
    });
  }, [navHideStore, workNav]);

  const handleNavSkills = useCallback(() => {
    navHideStore.set({
      show: true,
      callback: skillsNav,
    });
  }, [navHideStore, skillsNav]);

  const handleNavAbout = useCallback(() => {
    navHideStore.set({
      show: true,
      callback: aboutNav,
    });
  }, [navHideStore, aboutNav]);

  const handleMobileNavWork = useCallback(() => {
    workNav();
    mobileNavStore.set({
      show: false,
    });
  }, [mobileNavStore, workNav]);

  const handleMobileNavSkills = useCallback(() => {
    skillsNav();
    mobileNavStore.set({
      show: false,
    });
  }, [mobileNavStore, skillsNav]);

  const handleMobileNavAbout = useCallback(() => {
    aboutNav();
    mobileNavStore.set({
      show: false,
    });
  }, [mobileNavStore, aboutNav]);

  const handleShowModal = () =>
    modalStore.set({
      show: true,
    });

  return (
    <>
      <Head>
        <title>Alexander Buk-Swienty - Developer, editor, reader.</title>
      </Head>
      <NavHider />
      <LoadingScreen />
      <ContactModal />
      <header className="px-4 md:px-16">
        <MobileNav>
          <MobileNav.Item className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-stone-300">
            resumé
          </MobileNav.Item>
          <MobileNav.Item
            onClick={handleMobileNavWork}
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-stone-300"
          >
            work
          </MobileNav.Item>
          <MobileNav.Item
            onClick={handleMobileNavSkills}
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-stone-300"
          >
            skills & clients
          </MobileNav.Item>

          <MobileNav.Item
            onClick={handleMobileNavAbout}
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-stone-300"
          >
            about
          </MobileNav.Item>
        </MobileNav>
        <Nav>
          <Nav.Item className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-black">
            resumé
          </Nav.Item>
          <Nav.Item
            onClick={handleNavWork}
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-black"
          >
            work
          </Nav.Item>
          <Nav.Item
            onClick={handleNavSkills}
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-black"
          >
            skills & clients
          </Nav.Item>

          <Nav.Item
            onClick={handleNavAbout}
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-black"
          >
            about
          </Nav.Item>
          <Nav.Item className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-black">
            <button onClick={handleShowModal} className="ml-auto w-fit">
              contact
            </button>
          </Nav.Item>
          <Nav.Item>
            <DarkModeToggle />
          </Nav.Item>
          <Nav.Item>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ABukSwienty"
              aria-label="GitHub link"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/alexander-buk-swienty/"
              aria-label="LinkedIn link"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </Nav.Item>
        </Nav>
      </header>
      <main className="flex h-fit min-h-fit w-screen flex-col overflow-x-hidden bg-stone-200 px-4 transition-colors duration-1000 ease-in-out dark:bg-gray-800 dark:text-gray-900 md:px-16">
        {children}
      </main>
      <footer className="flex h-64 items-center px-16 dark:bg-gray-800">
        <aside>
          <p className="font-garamond text-sm font-medium text-black dark:text-white">
            portfolio © 2022 Alexander Buk-Swienty
          </p>
        </aside>
      </footer>
    </>
  );
};

export default PageLayout;
