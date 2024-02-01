import React from 'react'
import useGenres from '../hooks/useGenres'
import { Text, VStack } from '@chakra-ui/react';

const GenreList = () => {
    const {genres} = useGenres();
  return (
    <VStack>
        {genres.map((genre)=><Text>{genre.name}</Text>)}
    </VStack>
  )
}

export default GenreList