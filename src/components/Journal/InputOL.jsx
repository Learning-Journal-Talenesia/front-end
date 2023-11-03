import { FormControl, Input, ListItem, OrderedList } from "@chakra-ui/react";
import { useQuestion } from "../../context/Question.context";
import { useCallback, useMemo } from "react";

const InputOL = ({ content, number, questionIndex }) => {
  const { answer, onAnswerChange } = useQuestion();
  const name = useMemo(
    () => `${number - 1}-${questionIndex}`,
    [number, questionIndex]
  );

  const onChange = useCallback(
    (name, value) => {
      onAnswerChange(name, value);
    },
    [onAnswerChange]
  );

  const component = useMemo(() => {
    return (
      <OrderedList>
        {content.map((text, index) => (
          <ListItem mb="3" key={index}>
            <FormControl>
              <Input
                size="sm"
                type="text"
                placeholder={text}
                value={answer[`${name}-${index}`]}
                onChange={(e) => onChange(`${name}-${index}`, e.target.value)}
              />
            </FormControl>
          </ListItem>
        ))}
      </OrderedList>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  return component;
};

export default InputOL;
