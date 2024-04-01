import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { Game } from "../entities/Game";
interface Props {
  game: Game;
}
const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6} marginTop={20} as="dl">
      <DefinitionItem header="Platforms">
        {game.parent_platforms.map(({ platform }) => {
          return <Text key={platform.id}>{platform.name}</Text>;
        })}
      </DefinitionItem>
      <DefinitionItem header="Metascore">
        <CriticScore score={game.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem header="Genres">
        {game.genres.map((genre) => {
          return <Text key={genre.id}>{genre.name}</Text>;
        })}
      </DefinitionItem>
      <DefinitionItem header="Publishers">
        {game.publishers.map((publisher) => {
          return <Text key={publisher.id}>{publisher.name}</Text>;
        })}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
