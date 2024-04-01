import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: Props) => {
  const [expand, setExpand] = useState(false);
  if (!children) return null;
  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }
  const shortText = children.substring(0, limit) + " ...";
  return (
    <Text>
      {expand == false ? shortText : children}{" "}
      <Button
        marginLeft={1}
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={() => setExpand(!expand)}
      >
        {expand == false ? "Read More" : "Show Less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
