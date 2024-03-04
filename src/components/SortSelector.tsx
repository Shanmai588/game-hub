import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "../hooks/useGameQueryStore";

const SortSelector = () => {
  const setSortType = useGameQueryStore((state) => state.setSortType);
  const sortType = useGameQueryStore((state) => state.gameQuery.sortType);
  const sortTypeMap: { [key: string]: string } = {
    "": "Relevance",
    "-added": "Date added",
    name: "Name",
    "-released": "Released date",
    "-metacritic": "Popularity",
    "-rating": "Average rating",
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronBarDown></BsChevronBarDown>}
        mb={3}
      >
        {"Order by: " +
          (sortType === null ? "Relevance" : sortTypeMap[sortType])}
      </MenuButton>
      <MenuList>
        {Object.entries(sortTypeMap).map(([key, value]) => (
          <MenuItem key={key} value={key} onClick={() => setSortType(key)}>
            {value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
