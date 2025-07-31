"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const PlansViewerContext = createContext({});

export const usePlansViewerContext = () => useContext(PlansViewerContext);

export type PlansViewerType = {
  showPlansViewer: boolean;
  setShowPlansViewer: Dispatch<SetStateAction<boolean>>;
  currentPlan: string;
  setCurrentPlan: Dispatch<SetStateAction<string>>;
};

export const PlansViewerProvider = ({ children }: { children: ReactNode }) => {
  const [showPlansViewer, setShowPlansViewer] = useState(false);
  const [currentPlan, setCurrentPlan] = useState("básico");

  const value: PlansViewerType = {
    showPlansViewer,
    setShowPlansViewer,
    currentPlan,
    setCurrentPlan,
  };

  return (
    <PlansViewerContext.Provider value={value}>
      {children}
    </PlansViewerContext.Provider>
  );
};
