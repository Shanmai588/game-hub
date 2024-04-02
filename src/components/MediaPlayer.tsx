import React, { useState, useEffect, useRef } from "react";
import { Box, Image } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { Media } from "./Media"; // Assuming Media interface is in a separate file
import MediaPreview from "./MediaPreview";

const MediaPlayer: React.FC<{ mediaList: Media[] }> = ({ mediaList }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isValidIndex = (index: number) =>
    index >= 0 && index < mediaList.length;

  const switchMedia = (index: number) => {
    if (!isValidIndex(index)) {
      setCurrentMediaIndex(index < 0 ? mediaList.length - 1 : 0);
    } else {
      setCurrentMediaIndex(index);
    }
  };

  useEffect(() => {
    if (!mediaList.length || !isValidIndex(currentMediaIndex)) return;

    const currentMedia = mediaList[currentMediaIndex];
    if (currentMedia.type === "image") {
      timeoutRef.current = setTimeout(
        () => switchMedia((currentMediaIndex + 1) % mediaList.length),
        5000
      );
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentMediaIndex, mediaList]);

  const renderMedia = (media: Media) =>
    media.type === "video" ? (
      <ReactPlayer
        url={media.src}
        playing
        controls
        width="100%"
        height="100%"
      />
    ) : (
      <Image src={media.src} alt="Display" width="100%" height="auto" />
    );

  return (
    <Box>
      <Box mb={4}>{renderMedia(mediaList[currentMediaIndex])}</Box>
      <MediaPreview
        mediaList={mediaList}
        currentMediaIndex={currentMediaIndex}
        onMediaSelect={switchMedia}
      />
    </Box>
  );
};

export default MediaPlayer;
