import Badge, { BadgeProps } from "../../atoms/badge";
import IconSolid, { IconNames } from "../../atoms/icon/icon-solid";
import Title from "../../atoms/title";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface WorkProps {
  children: React.ReactNode;
}

const WorkHeader = ({ title, badge }: { title: string; badge: BadgeProps }) => {
  return (
    <div className="flex flex-row items-center justify-between dark:text-white">
      <Title size="md" className="font-arsenal">
        {title}
      </Title>
      <Badge {...badge} />
    </div>
  );
};

const WorkBody = ({
  children,
  logline,
}: {
  children: React.ReactNode;
  logline: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [showBody, setShowBody] = useState(false);

  const handleToggleBody = () => setShowBody((prev) => !prev);

  useEffect(() => {
    if (!ref.current) return;
    if (showBody) {
      controls.start({
        height: ref.current?.scrollHeight,
      });
    } else {
      controls.start({
        height: 0,
      });
    }
  }, [showBody, controls]);

  return (
    <div className="grow text-sm dark:text-gray-50">
      <p className="font-medium text-gray-600 dark:text-gray-50">{logline}</p>
      <motion.div
        ref={ref}
        animate={controls}
        className="my-3 h-0 overflow-hidden"
      >
        {children}
      </motion.div>
      <button
        onClick={handleToggleBody}
        className="mt-2 text-indigo-600 dark:text-red-400"
      >
        Read {showBody ? "less" : "more"}...
      </button>
    </div>
  );
};

const WorkFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col justify-center space-y-4 dark:text-white">
      {children}
    </div>
  );
};

const WorkFooterItem = ({
  href,
  icon,
  text,
  onClick,
}: {
  href?: string;
  icon: keyof IconNames;
  text: string;
  onClick?: () => void;
}) => {
  if (!href) {
    return (
      <p
        draggable="false"
        className="flex flex-row text-xs hover:text-indigo-600 dark:hover:text-red-400"
        onClick={onClick}
      >
        <IconSolid icon={icon} size="xs" className="mr-3" />
        {text}
      </p>
    );
  } else
    return (
      <a
        href={href}
        draggable="false"
        target="_blank"
        rel="noreferrer"
        className="flex flex-row text-xs hover:text-indigo-600 dark:hover:text-red-400"
      >
        <IconSolid icon={icon} size="xs" className="mr-3" />
        {text}
      </a>
    );
};

const Work = ({ children }: WorkProps) => {
  return (
    <motion.article
      whileHover={{
        scale: 1.05,
      }}
      className="flex max-h-fit min-h-[18rem] w-64 flex-col justify-between space-y-6 rounded-lg bg-white py-6 px-4 dark:bg-gray-700 sm:w-72 md:w-96"
    >
      {children}
    </motion.article>
  );
};

WorkFooter.Item = WorkFooterItem;
Work.Header = WorkHeader;
Work.Body = WorkBody;
Work.Footer = WorkFooter;

export default Work;
