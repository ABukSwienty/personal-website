import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import useSubscribableStore from "../hooks/use-subscribable-store";

export interface GlobalContextInterface {
  loadingScreenStore: ReturnType<
    typeof useSubscribableStore<{ animationComplete: boolean }>
  >;
  modalStore: ReturnType<typeof useSubscribableStore<{ show: boolean }>>;
  bgStore: ReturnType<typeof useSubscribableStore<{ color: string }>>;
  mobileNavStore: ReturnType<typeof useSubscribableStore<{ show: boolean }>>;

  navHideStore: ReturnType<
    typeof useSubscribableStore<{
      show: boolean;
      callback: () => void | undefined;
    }>
  >;
  introRef: React.RefObject<HTMLElement>;
  workRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
}

export const GlobalContext = createContext<GlobalContextInterface>(undefined!);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const introRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const loadingScreenStore = useSubscribableStore({
    animationComplete: false,
  });

  const navHideStore = useSubscribableStore({
    show: false,
    callback: () => {},
  });

  const bgStore = useSubscribableStore({
    color: "bg-stone-200",
  });

  const modalStore = useSubscribableStore({
    show: false,
  });

  const mobileNavStore = useSubscribableStore({
    show: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        loadingScreenStore,
        introRef,
        workRef,
        skillsRef,
        aboutRef,
        navHideStore,
        bgStore,
        modalStore,
        mobileNavStore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
