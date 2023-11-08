import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useStoreQuestion from "../../lib/zustand/Question";

const ButtonQuestion = ({ idQuestion }) => {
  const questions = useStoreQuestion((state) => state.questions);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  useEffect(() => {
    const currentQuestion = questions.findIndex(
      (question) => question._id === idQuestion
    );
    setCurrentQuestion(currentQuestion);
  }, [idQuestion, questions]);
  const handleNext = async () => {
    window.location.replace(`${questions[currentQuestion + 1]._id}`);
  };
  const handlePrev = async () => {
    window.location.replace(`${questions[currentQuestion - 1]._id}`);
  };
  return (
    <Box display={"flex"} gap={5} marginTop={5} marginX={10}>
      {currentQuestion === 0 ? (
        ""
      ) : (
        <Button
          background={"blue.300"}
          color={"white"}
          _hover={{ background: "gray.100", color: "blue.300" }}
          onClick={() => handlePrev()}
        >
          Prev
        </Button>
      )}

      {currentQuestion === questions.length - 1 ? (
        <Button
          background={"blue.300"}
          color={"white"}
          _hover={{ background: "gray.100", color: "blue.300" }}
        >
          Submit
        </Button>
      ) : (
        <Button
          background={"blue.300"}
          color={"white"}
          _hover={{ background: "gray.100", color: "blue.300" }}
          onClick={() => handleNext()}
        >
          Next
        </Button>
      )}
    </Box>
  );
};

export default ButtonQuestion;
