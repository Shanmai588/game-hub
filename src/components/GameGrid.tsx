import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
interface Props {
  genre: Genre | null;
}
const GameGrid = ({ genre }: Props) => {
  const { data, error, isLoading } = useGames(genre);
  const skeletons = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* beaware it should be cloumns not column */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        spacing={4}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
// Discard: replaced by modify the useGames configs
// const GetGamesByGenre = (games: Game[], genre: Genre): Game[] => {
//   return games.filter((game) => {
//     // Check if any genre in game.genres has a name that matches genre.name
//     return game.genres.some((g) => g.name === genre.name);
//   });
// };
export default GameGrid;
