import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  header: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ header, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" size={"md"} color="gray.600">
        {header}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
