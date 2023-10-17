import { createContext, useCallback, useContext, useState } from "react";

const SidebarContext = createContext({
  isOpen: false,
  isExpand: false,
  onOpen: () => {},
  onClose: () => {},
  onExpandClick: () => {},
});
SidebarContext.displayName = "SidebarContext";

const SidebarProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  const onOpen = useCallback(() => {
    setIsExpand(false);
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsExpand(false);
    setIsOpen(false);
  }, []);

  const onExpandClick = useCallback(() => {
    if (isOpen) {
      setIsExpand(!isExpand);
    }
  }, [isExpand, isOpen]);

  return (
    <SidebarContext.Provider
      value={{ isOpen, isExpand, onOpen, onClose, onExpandClick }}
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
