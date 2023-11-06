import { FormControl, Input, ListItem, OrderedList } from "@chakra-ui/react";
import { useQuestion } from "../../context/Question.context";
import { useCallback, useMemo } from "react";

const NewHabit = () => {
  const { answer, onAnswerChange } = useQuestion();
  const onChange = useCallback(
    (index, value) => {
      onAnswerChange("new_habit", { ...answer["new_habit"], [index]: value });
    },
    [answer, onAnswerChange]
  );

  const component = useMemo(() => {
    return (
      <OrderedList>
        {Array.from({ length: 3 }).map((_, index) => (
          <ListItem mb="3" key={index}>
            <FormControl>
              <Input
                size="sm"
                type="text"
                value={answer["new_habit"][index]}
                onChange={(e) => onChange(index, e.target.value)}
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

export default NewHabit;
