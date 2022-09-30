import { motion, Variants } from "framer-motion";
import Image, { ImageProps } from "next/image";
import Portal from "../../HOC/portal";
import Button from "../atoms/button";

import mnemoAdd from "../../assets/screen-shots/mnemo/add.png";
import mnemoContracts from "../../assets/screen-shots/mnemo/contracts.png";
import mnemoDash from "../../assets/screen-shots/mnemo/dash.png";
import mnemoSearch from "../../assets/screen-shots/mnemo/search.png";

import reBook from "../../assets/screen-shots/reRight/book.png";
import reContracts from "../../assets/screen-shots/reRight/contracts.png";
import reCreateAuthor from "../../assets/screen-shots/reRight/create-author.png";
import reCreateContract from "../../assets/screen-shots/reRight/create-contract.png";
import { useEffect } from "react";

const imageTable = {
  mnemoAdd: {
    src: mnemoAdd,
    alt: "screenshot",
  },
  mnemoContracts: {
    src: mnemoContracts,
    alt: "screenshot",
  },
  mnemoDash: {
    src: mnemoDash,
    alt: "screenshot",
  },
  mnemoSearch: {
    src: mnemoSearch,
    alt: "screenshot",
  },
  reBook: {
    src: reBook,
    alt: "screenshot",
  },
  reContracts: {
    src: reContracts,
    alt: "screenshot",
  },
  reCreateAuthor: {
    src: reCreateAuthor,
    alt: "screenshot",
  },
  reCreateContract: {
    src: reCreateContract,
    alt: "screenshot",
  },
};

const wrapperVariants: Variants = {
  initial: {
    backgroundColor: "rgb(79 70 229 / 0.0)",
  },
  animate: {
    backgroundColor: "rgb(79 70 229/ 0.7)",
  },
  exit: {
    backgroundColor: "rgb(220 220 220 / 0.0)",
  },
};

const imgVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

interface ScreenShotProps
  extends Omit<ImageProps, "src" | "alt" | "layout" | "placeholder"> {
  image: keyof typeof imageTable;
}

const ScreenShot = ({ image, ...rest }: ScreenShotProps) => {
  return (
    <motion.div
      variants={imgVariants}
      className="relative h-fit w-[70vw]"
      draggable="false"
    >
      <Image
        draggable="false"
        src={imageTable[image].src}
        alt={imageTable[image].alt}
        layout="intrinsic"
        {...rest}
        placeholder="blur"
      />
    </motion.div>
  );
};

const ScreenShotWrapper = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleClose);

    return () => document.removeEventListener("keydown", handleClose);
  }, [onClose]);

  useEffect(() => {
    const el = document.querySelector("body");
    if (!el) return;

    el.classList.add("overflow-hidden");

    return () => {
      el.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <Portal>
      <motion.div
        id="screen-shot-wrapper"
        variants={wrapperVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed z-50 flex h-screen w-screen flex-col items-center justify-start overflow-scroll pt-20 pb-20"
      >
        <Button
          color="dark"
          trailingIcon="close"
          className="absolute top-0 right-0 z-50 mt-4 mr-8"
          onClick={onClose}
        >
          Exit
        </Button>
        {children}
      </motion.div>
    </Portal>
  );
};

ScreenShotWrapper.ScreenShot = ScreenShot;

export default ScreenShotWrapper;
