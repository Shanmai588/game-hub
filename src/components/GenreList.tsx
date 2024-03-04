import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../hooks/useGameQueryStore";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const genreID = useGameQueryStore((state) => state.gameQuery.genreID);
  const setGenreID = useGameQueryStore((state) => state.setGenreID);
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      {isLoading && <Spinner></Spinner>}
      <List>
        {data?.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                objectFit={"cover"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === genreID ? "bold" : "normal"}
                variant={"link"}
                fontSize={"large"}
                onClick={() => {
                  setGenreID(genre.id);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
