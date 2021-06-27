import React, { createContext, useState } from "react";

//検索の要素
interface SearchElement {
  key: string;
  category: string;
}
//useState用
interface SearchContextProps {
  searchElement: SearchElement;
  setSearchElement: React.Dispatch<React.SetStateAction<SearchElement>>;
}

export const SearchContext = createContext({} as SearchContextProps);

interface Props {
  children?: React.ReactNode;
}

export const SearchProvider: React.VFC<Props> = ({ children }) => {
  const [searchElement, setSearchElement] = useState<SearchElement>({
    key: "",
    category: "",
  });
  return (
    <SearchContext.Provider value={{ searchElement, setSearchElement }}>
      {children}
    </SearchContext.Provider>
  );
};

//
//カスタムフックを用いたアプローチ（後々に仕様を変更しづらそうだったのでやめた）
//

// interface IContext {
//   key: string;
//   category: string;
//   setKey: React.Dispatch<React.SetStateAction<string>>;
//   setCategory: React.Dispatch<React.SetStateAction<string>>;
// }

// export const ScoreContext = createContext({} as IContext);

// export const useScoreContext = () => {
//   const [key, setKey] = useState<string>("");
//   const [category, setCategory] = useState<string>("");
//   return {
//     key,
//     category,
//     setKey,
//     setCategory,
//   };
// };
