import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { useQuestion } from "../../context/Question.context";
import { useCallback, useMemo } from "react";

const TextareaContent = ({ content, number, questionIndex }) => {
  const { answer, onAnswerChange } = useQuestion();

  const onChange = useCallback(
    (e) => {
      onAnswerChange(number - 1, questionIndex, [e.target.value]);
    },
    [number, onAnswerChange, questionIndex]
  );

  const component = useMemo(() => {
    return (
      <FormControl mb="3">
        <FormLabel>{content}</FormLabel>
        <Textarea
          placeholder="Silahkan tulis di sini"
          value={answer[number - 1][questionIndex][0]}
          onChange={onChange}
        />
      </FormControl>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer, content]);

  return component;
};

export default TextareaContent;
