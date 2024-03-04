import { HStack, Image } from "@chakra-ui/react";
import KFCLogo from "../assets/KFC.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    // horizontal stack
    <HStack padding="10px">
      <Image src={KFCLogo} boxSize="60px"></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
