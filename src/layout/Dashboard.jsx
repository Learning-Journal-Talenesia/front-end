import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <Box minH="100vh">
      <Navbar />
      {children}
    </Box>
  );
};

export default DashboardLayout;
