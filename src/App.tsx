import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
function App() {
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
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <Heading fontSize={"5xl"} marginBottom={3}>
          Games
        </Heading>
        <HStack marginY="4" spacing={4}>
          <PlatformSelector></PlatformSelector>
          <SortSelector></SortSelector>
        </HStack>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
