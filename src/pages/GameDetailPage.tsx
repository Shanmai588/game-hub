import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

// Define the expected shape of params

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) {
    return isLoading && <Spinner></Spinner>;
  }
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
