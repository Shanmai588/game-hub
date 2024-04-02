import React, { useEffect, useRef } from "react";
import { Box, HStack, IconButton, Image, Stack } from "@chakra-ui/react";
import { Media } from "../entities/Media";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface MediaPreviewProps {
  mediaList: Media[];
  currentMediaIndex: number;
  onMediaSelect: (index: number) => void;
}

const MediaPreview: React.FC<MediaPreviewProps> = ({
  mediaList,
  currentMediaIndex,
  onMediaSelect,
}) => {
  const mediaRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    if (mediaRefs.current[currentMediaIndex]) {
      mediaRefs.current[currentMediaIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [currentMediaIndex]);

  const renderPreview = (media: Media, index: number) => (
    <Box
      ref={(el: HTMLButtonElement) => (mediaRefs.current[index] = el)}
      as="button"
      onClick={() => onMediaSelect(index)}
      minWidth="120px"
      minHeight="60px"
      border={currentMediaIndex === index ? "2px solid gray" : "none"}
    >
      <Image src={media.preview} alt={`Preview ${index}`} objectFit="cover" />
    </Box>
  );

  const switchMedia = (index: number) => {
    if (index >= mediaList.length) onMediaSelect(0);
    else if (index < 0) onMediaSelect(mediaList.length - 1);
    else onMediaSelect(index);
  };

  return (
    <HStack justify="space-between">
      <IconButton
        color="gray.500"
        onClick={() => switchMedia(currentMediaIndex - 1)}
        as={FaAngleLeft}
        aria-label={"left"}
      ></IconButton>
      <Box maxWidth={700} overflowX="auto">
        <Stack direction="row" spacing={2}>
          {mediaList.map(renderPreview)}
        </Stack>
      </Box>
      <IconButton
        color="gray.500"
        as={FaAngleRight}
        aria-label={"right"}
        onClick={() => switchMedia(currentMediaIndex + 1)}
      ></IconButton>
    </HStack>
  );
};

export default MediaPreview;
