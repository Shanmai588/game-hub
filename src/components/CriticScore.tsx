import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = "green";
  if (score < 65) {
    color = "red";
  } else if (score < 80) {
    color = "yellow";
  }
  return (
    <Badge
      borderRadius="5px"
      fontSize={"14px"}
      paddingX={2}
      colorScheme={color}
    >
      {score}{" "}
    </Badge>
  );
};

export default CriticScore;
