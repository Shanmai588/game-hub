import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};
const PlatformIconList = ({ platforms }: Props) => {
  return (
    // the 1 is theme.space value, it is an enum to ensure consistence of layout
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key = {platform.slug} as={iconMap[platform.slug]} color='gray.500'></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
