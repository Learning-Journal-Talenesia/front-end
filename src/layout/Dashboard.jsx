import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <Box minH="100vh">
      <Navbar />
      <Box p="3" pt="70px">
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
