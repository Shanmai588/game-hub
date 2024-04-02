import { HStack, Image } from "@chakra-ui/react";
import Gamehub from "../assets/gamehub transback.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // horizontal stack
    <HStack padding="20px" spacing="5%">
      <Link to={"/"}>
        <Image
          src={Gamehub}
          boxSize={{ base: 20, md: 30, lg: 40 }}
          objectFit={"contain"}
        ></Image>
      </Link>

      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
