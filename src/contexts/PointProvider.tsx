import React, { createContext, useState, useContext } from "react";

// interface IPointContext {
//   point?: number;
//   setPoint?: React.Dispatch<React.SetStateAction<number>>;
// }

export const PointContext = createContext(
  {} as {
    point: number;
    setPoint: React.Dispatch<React.SetStateAction<number>>;
  }
);

export const usePointContext = () => {
  return useContext(PointContext);
};

interface Props {
  children?: React.ReactNode;
}

export const PointProvider: React.VFC<Props> = ({ children }) => {
  const [point, setPoint] = useState(0);
  return (
    <PointContext.Provider value={{ point, setPoint }}>
      {children}
    </PointContext.Provider>
  );
};
