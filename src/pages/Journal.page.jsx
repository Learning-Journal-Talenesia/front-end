import { useEffect } from "react";
import { useSidebar } from "../context/Sidebar.context";
import HeadingBox from "../components/HeadingBox";
import { Box, Button } from "@chakra-ui/react";

const JournalPage = () => {
  const { onOpen } = useSidebar();
  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
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
    </>
  );
};

export default JournalPage;
