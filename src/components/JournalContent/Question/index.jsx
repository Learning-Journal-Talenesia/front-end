import QCalendar from "./QCalendar";
import QEmote from "./QEmote";
import QMemantauTugas from "./QMemantauTugas";
import QParagraph from "./QParagraph";
import QCTable from "./QCTable";
import QTextarea from "./QTextarea";

const Question = ({ data }) => {
  return data.map((value, index) => {
    if (value.question_type === 0) {
      return <QParagraph key={index} data={value} />;
    } else if (value.question_type === 1) {
      return <QTextarea key={index} data={value} />;
    } else if (value.question_type === 2) {
      return <QEmote key={index} data={value} />;
    } else if (value.question_type === 3) {
      return <QCTable key={index} data={value} />;
    } else if (value.question_type === 4) {
      return <QCalendar key={index} data={value} />;
    } else if (value.question_type === 5) {
      return <QMemantauTugas key={index} data={value} />;
    } else {
      return <></>;
    }
  });
};

export default Question;
