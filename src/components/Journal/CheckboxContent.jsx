import { Checkbox, CheckboxGroup, FormControl, VStack } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import { useQuestion } from "../../context/Question.context";

const CheckboxContent = ({ content, number, questionIndex }) => {
  const { answer, onAnswerChange } = useQuestion();
  const name = useMemo(
    () => `${number - 1}-${questionIndex}`,
    [number, questionIndex]
  );

  const onChange = useCallback(
    (value) => {
      onAnswerChange(name, value);
    },
    [name, onAnswerChange]
  );

  return (
    <FormControl as="fieldset">
      <CheckboxGroup
        colorScheme="green"
        value={answer[name]}
        onChange={onChange}
      >
        <VStack gap="3" alignItems="flex-start">
          {content.map((value, index) => (
            <Checkbox key={index} value={value}>
              {value}
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
    </FormControl>
  );
};

export default CheckboxContent;
