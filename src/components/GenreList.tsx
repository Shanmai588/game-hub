import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  selectedGenre: Genre | null;
  onGenreClick: (selectedGenre: Genre) => void;
}
const GenreList = ({ selectedGenre, onGenreClick }: Props) => {
  const { data, isLoading, error } = useGenres();
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant={"link"}
                fontSize={"large"}
                onClick={() => {
                  onGenreClick(genre);
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
