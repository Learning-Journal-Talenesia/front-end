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
      arr.forEach(({ type, content }, j) => {
        switch (type) {
          case "textarea":
            tempAnswer[`${i}-${j}`] = "";
            break;
          case "emote":
            tempAnswer[`${i}-${j}`] = "";
            break;
          case "habit":
            Array.from({ length: 5 }).forEach((_, k) => {
              tempAnswer[`${i}-${j}-${k}-0`] = "";
              tempAnswer[`${i}-${j}-${k}-1`] = "";
            });
            break;
          case "input-ol":
            content.forEach((_, k) => {
              tempAnswer[`${i}-${j}-${k}`] = "";
            });
            break;
          case "calendar":
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
