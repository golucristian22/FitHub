import { createContext } from "react";

interface currentPageInterface {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CurrentPage = createContext<currentPageInterface>({
  currentPage: 1,
  setCurrentPage: () => {},
});
