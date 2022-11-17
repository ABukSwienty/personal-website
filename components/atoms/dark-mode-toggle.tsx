import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useContext, useSyncExternalStore } from "react";
import useDarkMode from "../../hooks/use-dark-mode";
import { GlobalContext } from "../../providers/global";

const DarkModeToggle = () => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <button
      aria-label="Dark mode toggle"
      className="ml-auto flex w-fit flex-row items-center"
    >
      {isDarkMode && <SunIcon onClick={toggle} className="h-5 w-5" />}
      {!isDarkMode && <MoonIcon onClick={toggle} className="h-5 w-5" />}
    </button>
  );
};

export default DarkModeToggle;
