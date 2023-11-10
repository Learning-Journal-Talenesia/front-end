import { Box, Button, Heading } from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import { useHistory } from "react-router";
import useStoreQuestion from "../lib/zustand/Question";
import { useQuestions } from "../hooks/Questions";

const TemaClassView = () => {
  const history = useHistory();
  useQuestions({
    idThema: 1,
    idUser: 1,
  });
  const dataQuestion = useStoreQuestion((state) => state.questions);

  const handleStart = () => {
    history.push(`/kelas/1/journal/1/number/${dataQuestion[0]._id}`);
  };
  const handleBack = () => {
    history.push("/kelas/about/1");
  };
  return (
    <main>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <HeadingBox textAlign="center">
          Kelas intensif - Admin Perkantoran
        </HeadingBox>
        <Heading
          size="sm"
          marginTop={2}
          color="app.blue.active"
          textAlign="center"
        >
          Learning Journal
        </Heading>
        <Box mt={10} display="flex" justifyContent="space-between" width={250}>
          <Button onClick={() => handleBack()} variant="secondary">
            Kembali
          </Button>
          <Button onClick={() => handleStart()} variant="primary" px={8}>
            Start
          </Button>
        </Box>
      </Box>
    </main>
  );
};

export default TemaClassView;
