import "./App.css";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Heading from "./components/Heading";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Heading size="sm">Kelas Intensif - Admin Perkantoran</Heading>
      <Box>
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
    </ChakraProvider>
  );
}

export default App;
