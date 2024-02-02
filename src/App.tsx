import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onGenreClick={(genre) => {
              console.log(genre);
              setSelectedGenre(genre);
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <GameGrid genre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
