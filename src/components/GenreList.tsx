import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  onGenreClick: (selectedGenre: Genre) => void;
}
const GenreList = ({ onGenreClick }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      <List>
        {data.map((data) => (
          <ListItem key={data.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(data.image_background)}
              ></Image>
              <Button
                variant={"link"}
                fontSize={"large"}
                onClick={() => {
                  onGenreClick(data);
                }}
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
