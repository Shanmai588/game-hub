import { HStack, Icon, useColorMode } from "@chakra-ui/react";
import { MdNightsStay } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Icon
        boxSize={10}
        as={colorMode === "dark" ? MdNightsStay : IoSunny}
        onClick={toggleColorMode}
      ></Icon>
      {/* <Text whiteSpace={"nowrap"}>Dark Mode</Text> */}
    </HStack>
  );
};

export default ColorModeSwitch;
