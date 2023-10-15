import "./App.css";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import HeadingBox from "./components/HeadingBox";
import DashboardLayout from "./layout/Dashboard";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DashboardLayout>
        <HeadingBox>Kelas Intensif - Admin Perkantoran</HeadingBox>
        <Box minH="100vh">
          <Button variant="primary">Test</Button>
          <Button isDisabled variant="primary">
            Test
          </Button>
          <Button isLoading variant="primary">
            Test
          </Button>
          <Button variant="secondary">Test</Button>
          <Button isDisabled variant="secondary">
            Test
          </Button>
          <Button isLoading variant="secondary">
            Test
          </Button>
        </Box>
      </DashboardLayout>
    </ChakraProvider>
  );
}

export default App;
