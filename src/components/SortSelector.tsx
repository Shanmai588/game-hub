import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
export interface SortType {
  value: string;
  label: string;
}
interface Props {
  selectedSortType: SortType | null;
  onSortClick: (sortType: SortType) => void;
}
const SortSelector = ({ selectedSortType, onSortClick }: Props) => {
  const sortType: SortType[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronBarDown></BsChevronBarDown>}
        mb={3}
      >
        {"Order by: " + (selectedSortType?.label || "Relevance")}
      </MenuButton>
      <MenuList>
        {sortType.map((type) => (
          <MenuItem
            key={type.value}
            value={type.value}
            onClick={() => onSortClick(type)}
          >
            {type.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
