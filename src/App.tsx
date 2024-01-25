import { Grid, GridItem, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./components/ColorModeSwitch";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        // for moble
        base: '"nav"    "main"',
        // for pc
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav" >
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="coral">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="coral">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
