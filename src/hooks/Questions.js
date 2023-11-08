import { useEffect, useState } from "react";
import Question from "../apis/Question";
import useStoreQuestion from "../lib/zustand/Question";

const useQuestions = (data) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuestionThemaId = async (idThema, idUser) => {
      try {
        const res = await Question.getQuestionThemaId({ idThema, idUser });
        setQuestions(res.data);
        console.log(res.data);
        useStoreQuestion.getState().setQuestions(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getQuestionThemaId(data.idThema, data.idUser);
  }, [data.idThema, data.idUser]);
  return { questions, questionsLoading: loading, questionsError: error };
};

const useQuestion = (id) => {
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuestionById = async (id) => {
      try {
        const res = await Question.getQuestionById(id);
        setQuestion(res);
        setLoading(false);
        useStoreQuestion.getState().setQuestion(res);
        return res.data;
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getQuestionById(id);
  }, [id]);
  return { question, questionLoading: loading, questionError: error };
};

export { useQuestions, useQuestion };
