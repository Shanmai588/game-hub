import useGameTrailers from "../hooks/useGameTrailers";
import { Box, Spinner } from "@chakra-ui/react";
import { Media } from "../entities/Media";
import MediaPlayer from "./MediaPlayer";
import useGameScreenshots from "../hooks/useGameScreenshots";
interface Props {
  id: number;
}
const GameTrailer = ({ id }: Props) => {
  const {
    data: trailers,
    isLoading: isTrailerLoading,
    error: isTrailerError,
  } = useGameTrailers(id);
  const {
    data: screenShots,
    isLoading: isScreenshotLoading,
    error: isScreenshotError,
  } = useGameScreenshots(id);
  if (isTrailerLoading || isScreenshotLoading) return <Spinner></Spinner>;
  if (!trailers || isTrailerError) throw isTrailerError;
  if (!screenShots || isScreenshotError) throw isScreenshotError;
  const videos: Media[] = trailers.map((trailer) => ({
    type: "video" as const,
    preview: trailer.preview,
    src: trailer.data.max,
  }));
  const images: Media[] = screenShots.map((shot) => ({
    type: "image" as const,
    preview: shot.image,
    src: shot.image,
  }));
  return (
    <Box width={{ base: 500, lg: 700, xl: 800 }}>
      <MediaPlayer mediaList={videos.concat(images)} />
    </Box>
  );
};

export default GameTrailer;
