import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatformID: number | null;
  onPlatformClick: (plaform: Platform) => void;
}
const PlatformSelector = ({ selectedPlatformID, onPlatformClick }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data.find((platform) => {
    return platform.id === selectedPlatformID;
  });
  if (error) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronBarDown></BsChevronBarDown>}
        mb={3}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onPlatformClick(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
