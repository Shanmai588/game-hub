import React from "react";
import useGameTrailers from "../hooks/useGameTrailers";
import { Spinner } from "@chakra-ui/react";
import { Media } from "./Media";
import MediaPlayer from "./MediaPlayer";
interface Props {
  id: number;
}
const GameTrailer = ({ id }: Props) => {
  const { data: trailers, isLoading, error } = useGameTrailers(id);
  if (isLoading) return <Spinner></Spinner>;
  if (!trailers || error) throw error;
  const videos: Media[] = trailers.map((trailer) => ({
    type: "video" as const,
    preview: trailer.preview,
    src: trailer.data.max, // or trailer.data[480] based on required quality
  }));

  return <MediaPlayer mediaList={videos} />;
};

export default GameTrailer;
