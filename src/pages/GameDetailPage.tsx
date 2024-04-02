import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Grid, GridItem, Heading, Show, Spinner } from "@chakra-ui/react";

import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameTrailer from "../components/GameTrailer";

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
    <Grid
      templateAreas={{
        // for moble
        base: '"main"',
        // for pc
        lg: '"aside main"',
      }}
      //make the nav bar only take 200px
      templateColumns={{
        base: "1fr",
        lg: "0.7fr 1fr",
      }}
      margin={10}
    >
      <Show above="lg">
        <GridItem area="aside" paddingRight={10}>
          <GameTrailer id={game.id}></GameTrailer>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Show below="lg">
          <GameTrailer id={game.id}></GameTrailer>
          <Box mb={10}></Box>
        </Show>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttribute game={game}></GameAttribute>
      </GridItem>
    </Grid>
  );
};

export default GameDetailPage;
