import { createContext, useContext, useEffect, useState } from "react";
import dummyData from "../dummyData/data";
import { useParams } from "react-router-dom";

const QuestionContext = createContext({
  sidebarData: { class_name: "", theme_name: "" },
  setSidebarData: () => {},
  journey: [],
  setJourney: [],
  answer: {},
  onAnswerChange: () => {},
});
QuestionContext.displayName = "QuestionContext";

const QuestionProvider = (props) => {
  const [sidebarData, setSidebarData] = useState({});
  const [journey, setJourney] = useState([]);
  const [answer, setAnswer] = useState({});
  const { theme_id } = useParams();

  const onAnswerChange = (name, value) => {
    setAnswer({
      ...answer,
      [name]: value,
    });
  };

  useEffect(() => {
    const theme = dummyData.themes.filter(
      ({ id }) => id === Number(theme_id)
    )[0];
    setSidebarData({ class_name: dummyData.name, theme_name: theme.name });
    setJourney(
      dummyData.themes.map((theme) => ({ id: theme.id, name: theme.name }))
    );

    const tempAnswer = {};
    theme.journal.forEach((arr, i) => {
      arr.forEach(({ type }, j) => {
        switch (type) {
          case "textarea":
            tempAnswer[`${i}-${j}`] = "";
            break;
          case "emote":
            tempAnswer[`${i}-${j}`] = "";
            break;
          case "habit":
            tempAnswer[`habit`] = {};
            Array.from({ length: 5 }).forEach((_, k) => {
              tempAnswer[`habit`][k] = { bad: "", good: "" };
            });
            break;
          case "new_habit":
            tempAnswer[`new_habit`] = {};
            Array.from({ length: 3 }).forEach((_, k) => {
              tempAnswer[`new_habit`][k] = "";
            });
            break;
          case "reward":
            tempAnswer[`reward`] = {};
            Array.from({ length: 3 }).forEach((_, k) => {
              tempAnswer[`reward`][k] = "";
            });
            break;
          case "calendar":
            tempAnswer[`calendar`] = [];
            break;
          case "checkbox":
            tempAnswer[`${i}-${j}`] = [];
            break;
          default:
            break;
        }
      });
    });

    setAnswer(tempAnswer);
  }, [theme_id]);

  return (
    <QuestionContext.Provider
      value={{
        sidebarData,
        setSidebarData,
        journey,
        setJourney,
        answer,
        onAnswerChange,
      }}
      {...props}
    />
  );
};

const useQuestion = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuestion must be used within a QuestionProvider");
  }

  return context;
};

export { QuestionContext, QuestionProvider, useQuestion };
