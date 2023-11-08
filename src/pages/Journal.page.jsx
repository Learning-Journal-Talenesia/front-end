import { useEffect } from "react";
import { useSidebar } from "../context/Sidebar.context";
import HeadingBox from "../components/HeadingBox";
import { Box, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuestion, useQuestions } from "../hooks/Questions";
import TypeCondition from "../components/TypeInputQuestions/TypeInput";

const JournalPage = () => {
  const { onOpen } = useSidebar();
  useEffect(() => {
    onOpen();
  }, [onOpen]);
  const { number_id } = useParams();
  const { questions, questionsLoading, questionsError } = useQuestions({
    idThema: 1,
    idUser: 1,
  });
  console.log(questionsLoading);
  const { question, questionLoading, questionError } = useQuestion(number_id);
  console.log(questionLoading);
  console.log(question);

  return (
    <>
      {!questionLoading ? (
        <>
          <HeadingBox marginTop={10}>{question.thema}</HeadingBox>
          <Box minH="100vh">
            <TypeCondition question={question} type={question.inputType} />
            <Box marginTop={5} marginX={10}>
              <Button>Prev</Button>
              <Button>Next</Button>
            </Box>
          </Box>
        </>
      ) : (
        <Box>Loading...</Box>
      )}
    </>
  );
};

export default JournalPage;
