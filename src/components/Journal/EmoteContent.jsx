import {
  FormControl,
  HStack,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import Emote from "./Emote";
import { useCallback, useMemo } from "react";
import { useQuestion } from "../../context/Question.context";

const EmoteContent = ({ content, number, questionIndex }) => {
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

  const component = useMemo(() => {
    return (
      <FormControl mb="3" as="fieldset">
        <RadioGroup value={answer[name]} onChange={onChange}>
          <HStack spacing="3">
            {content.map((name, index) => (
              <VStack key={index} fontSize="4xl" textColor="app.blue.active">
                <Emote name={name} />
                <Radio value={name}></Radio>
              </VStack>
            ))}
          </HStack>
        </RadioGroup>
      </FormControl>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer, content]);

  return component;
};

export default EmoteContent;
