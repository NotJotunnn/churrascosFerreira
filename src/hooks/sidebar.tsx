"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

const SidebarContext = createContext({});

export const useSidebarContext = () => useContext(SidebarContext);

export type SidebarType = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const value: SidebarType = {
    showSidebar,
    setShowSidebar,
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
