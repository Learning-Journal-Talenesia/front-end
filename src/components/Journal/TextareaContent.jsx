import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { useQuestion } from "../../context/Question.context";
import { useCallback, useMemo } from "react";

const TextareaContent = ({ content, number, questionIndex }) => {
  const { answer, onAnswerChange } = useQuestion();
  const name = useMemo(
    () => `${number - 1}-${questionIndex}`,
    [number, questionIndex]
  );

  const onChange = useCallback(
    (e) => {
      onAnswerChange(name, e.target.value);
    },
    [name, onAnswerChange]
  );

  const component = useMemo(() => {
    return (
      <FormControl mb="3">
        <FormLabel>{content}</FormLabel>
        <Textarea
          placeholder="Silahkan tulis di sini"
          value={answer[name]}
          onChange={onChange}
        />
      </FormControl>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer, content]);

  return component;
};

export default TextareaContent;
