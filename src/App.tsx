import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { SortType } from "./components/SortSelector";
export interface GameQuery {
  genreID: number | null;
  platformID: number | null;
  sortType: SortType | null;
  searchText: string;
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
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreID={gameQuery.genreID}
            onGenreClick={(genre) => {
              setGameQuery({ ...gameQuery, genreID: genre.id });
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" padding={5}>
        <HStack>
          <PlatformSelector
            selectedPlatformID={gameQuery.platformID}
            onPlatformClick={(platform) => {
              console.log(platform);
              setGameQuery({ ...gameQuery, platformID: platform.id });
            }}
          ></PlatformSelector>
          <SortSelector
            selectedSortType={gameQuery.sortType}
            onSortClick={(type) => {
              setGameQuery({ ...gameQuery, sortType: type });
            }}
          ></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
