import { create } from "zustand";

const useStoreQuestion = create((set) => ({
  question: {}, // Data tunggal
  questions: [], // Data banyak dalam bentuk array
  current: "",
  setQuestion: (question) => set({ question }),
  setQuestions: (questions) => set({ questions }),
  setCurrent: (current) => set({ current }),
  loading: false,
}));

export default useStoreQuestion;
