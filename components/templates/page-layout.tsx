import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { GlobalContext } from "../../providers/global";
import Background from "../molecules/background";
import Nav from "../organisms/nav";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { navigateToTop, isDarkMode, toggleDarkMode, showBackground } =
    useContext(GlobalContext);

  const handleAlertAllSquares = () => {
    document.dispatchEvent(new CustomEvent("ALL_THE_SQUARES"));
  };

  return (
    <div className="flex min-h-screen w-screen flex-col bg-indigo-50 dark:bg-indigo-800">
      <Nav>
        <Nav.Button
          aria-label="Navigate to top"
          onClick={navigateToTop}
          icon="home"
          tooltip="Back to top"
        />
        <div className="flex w-full flex-row items-center justify-end gap-4">
          <Nav.Link
            icon="github"
            href="https://github.com/ABukSwienty"
            tooltip="Github"
          />
          <Nav.Link
            icon="linkedIn"
            href="https://www.linkedin.com/in/alexander-buk-swienty-70b4611ba/"
            tooltip="LinkedIn"
          />
          <Nav.Button
            aria-label="Github account"
            icon="download"
            tooltip="Download resume"
            onClick={() =>
              window.open(
                "http://alexanderbukswienty.com/alexander-buk-swienty-cv.pdf",
                "_blank"
              )
            }
          />
          <Nav.Button
            aria-label="Toggle all the squares"
            onClick={handleAlertAllSquares}
            tooltip="Show me all the squares!"
          >
            <div className="m-1 h-4 w-4 rounded-sm bg-indigo-200 transition-colors duration-300 ease-in-out group-hover:bg-indigo-600 "></div>
          </Nav.Button>
          <Nav.Button
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            icon={isDarkMode ? "lightMode" : "darkMode"}
            tooltip={isDarkMode ? "Light mode" : "Dark mode"}
          />
        </div>
      </Nav>
      <div className="flex w-full grow flex-col">{children}</div>
      <Toaster />
      {showBackground && <Background wrapperId="landing" />}
    </div>
  );
};

export default PageLayout;
