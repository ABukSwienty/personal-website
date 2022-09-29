import { Sizes } from "../../../types/sizes";
import setClassName from "../../../util/set-class-name";
import {
  SunIcon,
  MoonIcon,
  EnvelopeIcon,
  ArrowSmallDownIcon,
  RocketLaunchIcon,
  NoSymbolIcon,
  XMarkIcon,
  ClipboardDocumentIcon,
  AtSymbolIcon,
  ChatBubbleBottomCenterTextIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  PhotoIcon,
  HomeModernIcon,
  FireIcon,
  ArrowRightIcon,
  ArrowDownOnSquareIcon,
} from "@heroicons/react/24/solid";

export interface IconNames {
  lightMode: typeof SunIcon;
  darkMode: typeof MoonIcon;
  contact: typeof FireIcon;
  arrowSmallDown: typeof ArrowSmallDownIcon;
  send: typeof RocketLaunchIcon;
  cancel: typeof NoSymbolIcon;
  close: typeof XMarkIcon;
  copy: typeof ClipboardDocumentIcon;
  email: typeof AtSymbolIcon;
  emailSubject: typeof ChatBubbleBottomCenterTextIcon;
  code: typeof CodeBracketIcon;
  website: typeof GlobeAltIcon;
  photo: typeof PhotoIcon;
  home: typeof HomeModernIcon;
  arrowRight: typeof ArrowRightIcon;
  download: typeof ArrowDownOnSquareIcon;
}

export interface IconProps extends React.ComponentProps<"svg"> {
  size?: keyof typeof iconSizes;
  icon: keyof IconNames;
}

export const iconSizes: Pick<Sizes, "xs" | "sm" | "md" | "lg"> = {
  xs: "w-4 h-4",
  sm: "w-6 h-6",
  md: "w-6 h-6 md:w-8 h-8",
  lg: "w-12 h-12",
};

const iconTable: IconNames = {
  lightMode: SunIcon,
  darkMode: MoonIcon,
  contact: FireIcon,
  arrowSmallDown: ArrowSmallDownIcon,
  send: RocketLaunchIcon,
  cancel: NoSymbolIcon,
  close: XMarkIcon,
  copy: ClipboardDocumentIcon,
  email: AtSymbolIcon,
  emailSubject: ChatBubbleBottomCenterTextIcon,
  code: CodeBracketIcon,
  website: GlobeAltIcon,
  photo: PhotoIcon,
  home: HomeModernIcon,
  arrowRight: ArrowRightIcon,
  download: ArrowDownOnSquareIcon,
};

const IconSolid = ({
  size = "sm",
  className = "",
  icon,
  ...rest
}: IconProps) => {
  const classNames = setClassName([iconSizes[size], className]);
  const Icon = iconTable[icon];
  return <Icon className={classNames} {...rest} />;
};

export default IconSolid;
