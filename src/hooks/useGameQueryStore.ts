import { create } from "zustand";
export interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreID: (genreId: number | null) => void;
  setPlatformID: (genreId: number | null) => void;
  setSortType: (sortType: string | null) => void;
}
interface GameQuery {
  genreID: number | null;
  platformID: number | null;
  sortType: string | null;
  searchText: string;
}
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    searchText: "",
    genreID: null,
    platformID: null,
    sortType: null,
  },
  setSearchText: (searchText) =>
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        searchText,
      },
    })),
  setGenreID: (genreID) =>
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        genreID,
      },
    })),
  setPlatformID: (platformID) =>
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        platformID,
      },
    })),
  setSortType: (sortType) =>
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        sortType,
      },
    })),
}));
export default useGameQueryStore;
