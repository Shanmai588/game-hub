import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../hooks/useGameQueryStore";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatformID = useGameQueryStore((state) => state.setPlatformID);
  const platformID = useGameQueryStore((state) => state.gameQuery.platformID);
  const selectedPlatform = data.find((platform) => {
    return platform.id === platformID;
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
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformID(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
