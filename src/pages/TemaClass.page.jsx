import { Box, Button, Heading } from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import useStoreQuestion from "../lib/zustand/Question";
import { useQuestions } from "../hooks/Questions";
import { useHistory, useParams } from "react-router";

const TemaClassPage = () => {
  const history = useHistory();
  const { thema_id } = useParams();
  const { user_id } = useParams();
  const namaKelas = JSON.parse(localStorage.getItem("user")).namaKelas;
  useQuestions({
    idThema: thema_id,
    idUser: user_id,
  });
  const questions = useStoreQuestion((state) => state.questions);
  const handleStart = () => {
    history.push(
      `/user/${user_id}/journal/${thema_id}/number/` + questions[0]._id
    );
  };
  const handleBack = () => {
    history.push(`/user/about/${user_id}/journal/${thema_id}`);
  };
  return (
    <>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <HeadingBox textAlign="center">{namaKelas}</HeadingBox>
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
    </>
  );
};

export default TemaClassPage;
