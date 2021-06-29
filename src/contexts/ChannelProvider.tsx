import React, { createContext, useState } from "react";

interface ChannelElement {
  keyword: string;
  maxResults: string;
}

interface ChannnelContextProps {
  channelElement: ChannelElement;
  setChannelElement: React.Dispatch<React.SetStateAction<ChannelElement>>;
}

export const ChannelContext = createContext({} as ChannnelContextProps);

interface Props {
  children?: React.ReactNode;
}

export const ChannelProvider: React.VFC<Props> = ({ children }) => {
  const [channelElement, setChannelElement] = useState<ChannelElement>({
    keyword: "",
    maxResults: "",
  });
  return (
    <ChannelContext.Provider value={{ channelElement, setChannelElement }}>
      {children}
    </ChannelContext.Provider>
  );
};
