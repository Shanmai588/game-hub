
import { Card, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {
  const {data, error, isLoading} = useGames();
  const skeletons = ['s1','s2','s3','s4','s5','s6', 's7', 's8', 's9'];
  return (
    <>
        {error && <Text>{error}</Text>}
        {/* beaware it should be cloumns not column */}
        <SimpleGrid columns = {{sm:1, md:2,lg:3}} spacing = {10}>
          {isLoading && skeletons.map((skeleton)=><GameCardContainer key = {skeleton}><GameCardSkeleton key = {skeleton}></GameCardSkeleton></GameCardContainer>)}
          {data.map((data) => (
            <GameCardContainer key = {data.id}>
              <GameCard key ={data.id} game={data}></GameCard>
            </GameCardContainer>
          ))}
        </SimpleGrid>
      
    </>
  );
};

export default GameGrid;
