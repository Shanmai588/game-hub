import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
function App() {
  return (
    <Grid
      templateAreas={{
        // for moble
        base: '"nav"    "main"',
        // for pc
        lg: '"nav nav" "aside main"',
      }}
      //make the nav bar only take 200px
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" padding={5}>
        <HStack>
          <PlatformSelector></PlatformSelector>
          <SortSelector></SortSelector>
        </HStack>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
