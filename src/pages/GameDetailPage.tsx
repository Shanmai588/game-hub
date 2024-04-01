import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";

import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";

// Define the expected shape of params

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) {
    return isLoading && <Spinner margin={10}></Spinner>;
  }
  if (error || !game) {
    throw error;
  }

  return (
    <Box margin={10}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttribute game={game}></GameAttribute>
    </Box>
  );
};

export default GameDetailPage;
