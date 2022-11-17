import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { WorkT } from "../../constants/works";
import Badge from "../atoms/badge";
import Button from "../atoms/button";

const titleVariants: Variants = {
  exit: {
    y: -120,
    opacity: 0,
  },
};

const SingleWork = ({
  work,
  children,
}: {
  work: WorkT;
  children?: (isReady: boolean) => React.ReactNode;
}) => {
  const {
    title,
    description,
    longDescription,
    status,
    technologies,
    codeLink,
    liveLink,
  } = work;

  const [shouldChange, setShouldChange] = useState(false);
  const [isReady, setIsReady] = useState(true);

  const handleClick = () => {
    if (shouldChange) {
      setIsReady(false);
      setShouldChange(false);

      return;
    }
    setShouldChange(true);
    setIsReady(false);
  };

  const bgColor = shouldChange ? "dark:bg-black bg-gray-800" : "bg-gray-900";

  return (
    <div
      className={`relative flex h-full min-h-fit w-full flex-col justify-between p-4 text-white transition-colors duration-1000 ease-in-out ${bgColor}`}
    >
      <div>
        <AnimatePresence>
          {!shouldChange && isReady && (
            <motion.div
              variants={titleVariants}
              exit="exit"
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 120,
              }}
              onAnimationComplete={() => setIsReady(true)}
            >
              <div className="flex flex-row flex-wrap items-center justify-between">
                <h2 className="font-garamond text-2xl font-medium sm:text-3xl">
                  {title}
                </h2>
                <Badge color="light" text={status} />
              </div>
              <p className="mt-4 w-full whitespace-pre-wrap sm:mt-8">
                {description}
              </p>
              {!shouldChange && (
                <Button
                  size="xs"
                  color="dark"
                  className="mt-4"
                  onClick={handleClick}
                >
                  show more
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {shouldChange && isReady && (
            <>
              <motion.div
                initial={{
                  y: -120,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -120,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 120,
                }}
                onAnimationComplete={() => setIsReady(true)}
              >
                <Button size="xs" color="dark" onClick={handleClick}>
                  show less
                </Button>
                <p className="mt-4 whitespace-pre-wrap text-sm">
                  {longDescription}
                </p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <div className="flex grow flex-col items-center justify-center">
        {children && children(shouldChange && isReady)}
      </div>

      {
        <div className="flex flex-col space-y-2 whitespace-pre-wrap">
          <div>
            {codeLink && (
              <a
                className="my-1 flex flex-row items-center text-sm transition-colors duration-300 hover:text-stone-200"
                href={codeLink}
                target="_blank"
                rel="noreferrer"
              >
                <CodeBracketIcon className="mr-3 h-6 w-6" />
                check out the code
              </a>
            )}
            {liveLink && (
              <a
                className="my-1 flex flex-row items-center text-sm transition-colors duration-300 hover:text-stone-200"
                href={liveLink}
                target="_blank"
                rel="noreferrer"
              >
                <GlobeAltIcon className="mr-3 h-6 w-6" />
                check out the live version
              </a>
            )}
          </div>
          <div className="flex flex-row flex-wrap">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                text={tech}
                className="mx-1 mt-2"
                color="dark"
              />
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default SingleWork;
