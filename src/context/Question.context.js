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

  const onAnswerChange = (pageIndex, questionIndex, answerList) => {
    setAnswer({
      ...answer,
      [pageIndex]: { ...answer[pageIndex], [questionIndex]: answerList },
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
      tempAnswer[i] = {};
      arr.forEach(({ type }, j) => {
        switch (type) {
          case "textarea":
            tempAnswer[i][j] = [""];
            break;
          case "emote":
            tempAnswer[i][j] = [""];
            break;
          case "habit":
            tempAnswer[i][j] = ["", "", "", "", "", "", "", "", "", ""];
            break;
          case "input-ol":
            tempAnswer[i][j] = ["", "", "", "", "", ""];
            break;
          case "calendar":
            tempAnswer[i][j] = [];
            break;
          default:
            tempAnswer[i][j] = [""];
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
