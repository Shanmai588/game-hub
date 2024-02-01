
import { Card, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
  const {games, error, isLoading} = useGames();
  const skeletons = ['s1','s2','s3','s4','s5','s6', 's7', 's8', 's9'];
  skeletons.map((skeleton)=>console.log(skeleton))
  console.log(isLoading);
  return (
    <>
        {error && <Text>{error}</Text>}
        {/* beaware it should be cloumns not column */}
        <SimpleGrid columns = {{sm:1, md:2,lg:3}} spacing = {10}>
          {isLoading && skeletons.map((skeleton)=><GameCardSkeleton key = {skeleton}></GameCardSkeleton>)}
          {games.map((game) => (
            <GameCard key ={game.id} game={game}></GameCard>
          ))}
        </SimpleGrid>
      
    </>
  );
};

export default GameGrid;
