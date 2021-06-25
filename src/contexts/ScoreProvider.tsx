import React, { createContext, useState, useContext } from "react";

export interface ModalContextProps {
  key: string;
  category: string;
}

export const ScoreContext = createContext(
  {} as {
    // score: {
    //   key: string;
    // };
    setScore: React.Dispatch<React.SetStateAction<string>>;
  }
);

export const useScoreContext = () => {
  return useContext(ScoreContext);
};

interface Props {
  children?: React.ReactNode;
}

export const ScoreProvider: React.VFC<Props> = ({ children }) => {
  const [score, setScore] = useState("");
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
