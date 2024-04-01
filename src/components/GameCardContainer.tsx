import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      cursor="pointer"
      transition="transform 0.2s ease-in"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
