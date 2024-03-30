import { HStack, Image } from "@chakra-ui/react";
import Gamehub from "../assets/gamehub transback.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    // horizontal stack
    <HStack padding="20px" spacing="5%">
      <Image src={Gamehub} boxSize="6%"></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
