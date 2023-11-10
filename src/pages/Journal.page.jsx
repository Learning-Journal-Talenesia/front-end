import { useEffect } from "react";
import { useSidebar } from "../context/Sidebar.context";
import HeadingBox from "../components/HeadingBox";
import { Box, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuestion, useQuestions } from "../hooks/Questions";
import TypeCondition from "../components/TypeInputQuestions/TypeInput";
import useStoreQuestion from "../lib/zustand/Question";

const JournalPage = () => {
  const { onOpen } = useSidebar();
  useEffect(() => {
    onOpen();
  }, [onOpen]);
  const { number_id } = useParams();
  useEffect(() => {
    useStoreQuestion.getState().setCurrent(number_id);
  }, [number_id]);
  const { questions, questionsLoading, questionsError } = useQuestions({
    idThema: 1,
    idUser: 1,
  });
  const { question, questionLoading, questionError } = useQuestion(number_id);
  return (
    <>
      {!questionLoading ? (
        <>
          <HeadingBox marginTop={10}>{question.thema}</HeadingBox>
          <Box minH="50vh">
            <TypeCondition
              idQuestion={number_id}
              question={question}
              type={question.inputType}
            />
          </Box>
        </>
      ) : (
        <Box>Loading...</Box>
      )}
    </>
  );
};

export default JournalPage;
