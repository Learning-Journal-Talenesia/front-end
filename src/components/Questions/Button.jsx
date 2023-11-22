import React, { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import useStoreQuestion from "../../lib/zustand/Question";
import { useHistory, useParams } from "react-router-dom";
import Question from "../../apis/Question";
import Swal from "sweetalert2";

const ButtonQuestion = ({
  onClear,
  idQuestion,
  inputQuestion,
  setInputQuestion,
}) => {
  const questions = useStoreQuestion((state) => state.questions);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const { user_id, thema_id } = useParams();
  const history = useHistory();
  const answerLocal = JSON.parse(localStorage.getItem("user"));

  const onPass = (inputQuestion) => {
    if (inputQuestion !== "") {
      useStoreQuestion.getState().setAnswer(inputQuestion);
    }
    setInputQuestion("");
  };

  const onSubmit = () => {
    const data = useStoreQuestion.getState().answer;

    // Filter out entries with numeric keys
    const arrData = Object.keys(data)
      .filter((key) => isNaN(Number(key)))
      .map((key) => ({ [key]: data[key] }));

    const submit = {
      idThema: thema_id,
      thema: answerLocal.namaKelas,
      idUser: user_id,
      userName: answerLocal.nama,
      qna: arrData.map((item) => ({
        q: Object.keys(item)[0],
        a: Object.values(item)[0],
      })),
    };

    Question.submitQuestion(submit).then(() => {
      Swal.fire("Terimakasih sudah mengisi!", "Saved!", "success").then(() => {
        localStorage.removeItem("answer");
        window.location.href = "/success";
      });
    });
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
  };

  const handlePrev = () => {
    const prevQuestionId = questions[currentQuestion - 1]._id;
    history.push(`${prevQuestionId}`);
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
          onClick={() => {
            onPass(inputQuestion);
            onSubmit();
          }}
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
