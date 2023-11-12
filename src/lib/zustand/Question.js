import { create } from "zustand";

const useStoreQuestion = create((set) => ({
  question: {}, // Data tunggal
  questions: [], // Data banyak dalam bentuk array
  current: "",
  setQuestion: (question) => set({ question }),
  setQuestions: (questions) => set({ questions }),
  setCurrent: (current) => set({ current }),
  loading: false,
  // input questions
  answer: !localStorage.getItem("answer")
    ? {}
    : JSON.parse(localStorage.getItem("answer")),
  setAnswer: (inputQuestion) => {
    set((state) => ({
      answer: { ...state.answer, ...inputQuestion },
    }));
    localStorage.setItem(
      "answer",
      JSON.stringify({
        ...useStoreQuestion.getState().answer,
        ...inputQuestion,
      })
    );
  },
}));

export default useStoreQuestion;
