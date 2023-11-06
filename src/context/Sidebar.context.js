import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import dummyData from "../dummyData/data";
import { useParams } from "react-router-dom";

const SidebarContext = createContext({
  isExpand: false,
  onExpandClick: () => {},
  sidebarTotalPage: [],
  setSidebarTotalPage: () => {},
});
SidebarContext.displayName = "SidebarContext";

const SidebarProvider = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [sidebarTotalPage, setSidebarTotalPage] = useState(0);
  const { theme_id } = useParams();

  const onExpandClick = useCallback(() => {
    setIsExpand(!isExpand);
  }, [isExpand]);

  useEffect(() => {
    const theme = dummyData.themes.filter(
      ({ id }) => id === Number(theme_id)
    )[0];
    setSidebarTotalPage(theme.journal.length);
  }, [setSidebarTotalPage, theme_id]);

  return (
    <SidebarContext.Provider
      value={{
        isExpand,
        onExpandClick,
        sidebarTotalPage,
        setSidebarTotalPage,
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
