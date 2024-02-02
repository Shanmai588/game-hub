import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";

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
      <GridItem area="main" paddingX={5}>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
