import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
      <GridItem area="main" padding={5}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onPlatformClick={(platform) => {
            console.log(platform);
            setSelectedPlatform(platform);
          }}
        ></PlatformSelector>
        <GameGrid genre={selectedGenre} platform={selectedPlatform}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
