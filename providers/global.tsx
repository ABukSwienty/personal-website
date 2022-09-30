import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

export interface GlobalContextInterface {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  navigateToTop: () => void;
}

export const GlobalContext = createContext<GlobalContextInterface>({
  isDarkMode: false,
  toggleDarkMode: () => {},
  navigateToTop: () => {},
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigateToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const toggleDarkMode = useCallback(() => {
    const body = document.querySelector("body");
    if (!body) return;

    setIsDarkMode((prev) => {
      const mode = !prev;

      if (mode) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }

      return mode;
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ isDarkMode, toggleDarkMode, navigateToTop }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
