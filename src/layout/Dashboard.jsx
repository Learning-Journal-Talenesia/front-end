import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../context/Sidebar.context";

const DashboardLayout = ({ children }) => {
  const { isOpen, isExpand } = useSidebar();

  return (
    <Box minH="100vh">
      <Navbar />
      <Sidebar />
      <Box
        px="3"
        pt="70px"
        ml={isOpen ? (isExpand ? "216px" : "72px") : "0"}
        transition="0.3s ease"
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
