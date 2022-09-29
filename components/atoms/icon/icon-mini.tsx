import setClassName from "../../../util/set-class-name";
import { IconNames, IconProps, iconSizes } from "./icon-solid";
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
} from "@heroicons/react/20/solid";

interface IconMini extends IconProps {}

const iconTable: IconNames = {
  arrowSmallDown: ArrowSmallDownIcon,
  cancel: NoSymbolIcon,
  close: XMarkIcon,
  code: CodeBracketIcon,
  contact: FireIcon,
  copy: ClipboardDocumentIcon,
  darkMode: MoonIcon,
  email: AtSymbolIcon,
  emailSubject: ChatBubbleBottomCenterTextIcon,
  home: HomeModernIcon,
  lightMode: SunIcon,
  photo: PhotoIcon,
  send: RocketLaunchIcon,
  website: GlobeAltIcon,
  arrowRight: ArrowRightIcon,
  download: ArrowDownOnSquareIcon,
};

const IconMini = ({ icon, size = "sm", className = "", ...rest }: IconMini) => {
  const classNames = setClassName([iconSizes[size], className]);
  const Icon = iconTable[icon];
  return <Icon className={classNames} {...rest} />;
};

export default IconMini;
