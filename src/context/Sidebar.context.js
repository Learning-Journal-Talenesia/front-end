import { createContext, useCallback, useContext, useState } from "react";

const SidebarContext = createContext({
  isExpand: false,
  onExpandClick: () => {},
  sidebarTotalPage: [],
  setSidebarTotalPage: () => {},
  sidebarData: { class_name: "", theme_name: "" },
  setSidebarData: () => {},
  journey: [],
  setJourney: [],
});
SidebarContext.displayName = "SidebarContext";

const SidebarProvider = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [sidebarTotalPage, setSidebarTotalPage] = useState(0);
  const [sidebarData, setSidebarData] = useState({});
  const [journey, setJourney] = useState([]);

  const onExpandClick = useCallback(() => {
    setIsExpand(!isExpand);
  }, [isExpand]);

  return (
    <SidebarContext.Provider
      value={{
        isExpand,
        onExpandClick,
        sidebarTotalPage,
        setSidebarTotalPage,
        sidebarData,
        setSidebarData,
        journey,
        setJourney,
      }}
      {...props}
    />
  );
};

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
};

export { SidebarContext, SidebarProvider, useSidebar };
