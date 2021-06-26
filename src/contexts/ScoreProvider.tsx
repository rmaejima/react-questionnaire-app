import React, { createContext, useState } from "react";

interface IContext {
  key: string;
  category: string;
  setKey: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

// export interface ScoreContextProps {
//   modal: IContext;
//   setModal: React.Dispatch<React.SetStateAction<IContext>>;
// }

export const ScoreContext = createContext({} as IContext);

export const useScoreContext = () => {
  const [key, setKey] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  return {
    key,
    category,
    setKey,
    setCategory,
  };
};

interface Props {
  children?: React.ReactNode;
}

export const ScoreProvider: React.VFC<Props> = ({ children }) => {
  const { key, category, setKey, setCategory } = useScoreContext();
  return (
    <ScoreContext.Provider value={{ key, category, setKey, setCategory }}>
      {children}
    </ScoreContext.Provider>
  );
};
