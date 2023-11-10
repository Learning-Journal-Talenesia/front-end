import React, { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import useStoreQuestion from "../../lib/zustand/Question";
import { useHistory } from "react-router-dom";

const ButtonQuestion = ({
  onClear,
  idQuestion,
  inputQuestion,
  setInputQuestion,
}) => {
  const questions = useStoreQuestion((state) => state.questions);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const history = useHistory();

  const onPass = (inputQuestion) => {
    if (inputQuestion !== "") {
      useStoreQuestion.getState().setAnswer(inputQuestion);
    }
    setInputQuestion("");
  };

  useEffect(() => {
    const currentQuestionIndex = questions.findIndex(
      (question) => question._id === idQuestion
    );
    setCurrentQuestion(currentQuestionIndex);
  }, [idQuestion, questions]);

  const handleNext = () => {
    const nextQuestionId = questions[currentQuestion + 1]._id;
    history.push(`${nextQuestionId}`);
    // window.location.replace(`${nextQuestionId}`);
  };

  const handlePrev = () => {
    const prevQuestionId = questions[currentQuestion - 1]._id;
    history.push(`${prevQuestionId}`);
    // window.location.replace(`${prevQuestionId}`);
  };

  return (
    <Box display="flex" gap={5} marginTop={5} marginX={10}>
      {currentQuestion !== 0 && (
        <Button
          background="blue.300"
          color="white"
          _hover={{ background: "gray.100", color: "blue.300" }}
          onClick={() => {
            onPass(inputQuestion);
            handlePrev();
            onClear();
          }}
        >
          Prev
        </Button>
      )}

      {currentQuestion === questions.length - 1 ? (
        <Button
          background="blue.300"
          color="white"
          _hover={{ background: "gray.100", color: "blue.300" }}
        >
          Submit
        </Button>
      ) : (
        <Button
          background="blue.300"
          color="white"
          _hover={{ background: "gray.100", color: "blue.300" }}
          onClick={() => {
            onPass(inputQuestion);
            handleNext();
            onClear();
          }}
        >
          Next
        </Button>
      )}
    </Box>
  );
};

export default ButtonQuestion;
