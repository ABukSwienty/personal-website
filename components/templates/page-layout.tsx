import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { GlobalContext } from "../../providers/global";
import Background from "../molecules/background";
import Nav from "../organisms/nav";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { navigateToTop, isDarkMode, toggleDarkMode } =
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
        />
        <div className="flex w-full flex-row justify-end gap-4">
          <Nav.Button onClick={handleAlertAllSquares}>
            <div className="m-1 h-4 w-4 rounded-sm bg-indigo-200 transition-colors duration-300 ease-in-out group-hover:bg-indigo-600 "></div>
          </Nav.Button>
          <Nav.Button
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            icon={isDarkMode ? "lightMode" : "darkMode"}
          />
        </div>
      </Nav>
      <div className="flex w-full grow flex-col">{children}</div>
      <Toaster />
      <Background wrapperId="landing" />
    </div>
  );
};

export default PageLayout;
