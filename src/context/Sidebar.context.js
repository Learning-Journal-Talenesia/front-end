import { createContext, useCallback, useContext, useState } from "react";

const SidebarContext = createContext({
  isExpand: false,
  onExpandClick: () => {},
  sidebarTotalPage: [],
  setSidebarTotalPage: () => {},
  sidebarData: { kelas_name: "", tema_name: "" },
  setSidebarData: () => {},
});
SidebarContext.displayName = "SidebarContext";

const SidebarProvider = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [sidebarTotalPage, setSidebarTotalPage] = useState(0);
  const [sidebarData, setSidebarData] = useState({});

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
