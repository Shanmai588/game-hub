import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
            selectedGenre={gameQuery.genre}
            onGenreClick={(genre) => {
              console.log(genre);
              setGameQuery({ ...gameQuery, genre });
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" padding={5}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onPlatformClick={(platform) => {
            console.log(platform);
            setGameQuery({ ...gameQuery, platform });
          }}
        ></PlatformSelector>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
