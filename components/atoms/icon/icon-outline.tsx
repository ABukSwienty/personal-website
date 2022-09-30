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
} from "@heroicons/react/24/outline";
import { IconNames, IconProps, iconSizes } from "./icon-solid";
import setClassName from "../../../util/set-class-name";

interface IconOutLine extends IconProps {}

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

const IconOutline = ({
  icon,
  size = "sm",
  className = "",
  ...rest
}: IconOutLine) => {
  const classNames = setClassName([iconSizes[size], className]);
  const Icon = iconTable[icon];
  return <Icon className={classNames} {...rest} />;
};

export default IconOutline;
