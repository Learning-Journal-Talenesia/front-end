import { Box, Checkbox, Input, Stack, Textarea } from "@chakra-ui/react";
import ButtonQuestion from "../Questions/Button";
import { useState, useEffect } from "react";
import useStoreQuestion from "../../lib/zustand/Question";

const TypeCondition = ({ type, question, idQuestion }) => {
  const [value, setValue] = useState("");
  const [inputQuestion, setInputQuestion] = useState({});
  const zustandStore = useStoreQuestion.getState();
  const oldDataAnswer = zustandStore.answer[question.question[0]] || [];

  useEffect(() => {
    if (oldDataAnswer) {
      setValue(oldDataAnswer);
      setInputQuestion({ [question.question[0]]: oldDataAnswer });
    }
  }, [oldDataAnswer]);

  const onChange = (e) => {
    e.preventDefault();

    let updatedInputQuestion;

    if (type === "checkbox") {
      const { name, checked, value } = e.target;

      // Copy the existing array or create a new one if it doesn't exist
      const currentArray = Array.isArray(inputQuestion[name])
        ? inputQuestion[name]
        : [];

      // Update the array based on checkbox status
      const updatedArray = checked
        ? [...currentArray, value]
        : currentArray.filter((item) => item !== value);

      updatedInputQuestion = {
        ...inputQuestion,
        [name]: updatedArray,
      };
    } else {
      updatedInputQuestion = {
        ...inputQuestion,
        [e.target.name]: e.target.value,
      };
    }

    setInputQuestion(updatedInputQuestion);

    // Update the Zustand store with the new value or array
    zustandStore.updateAnswer(
      question.question[0],
      type === "checkbox"
        ? updatedInputQuestion[question.question[0]]
        : e.target.value
    );
  };

  const onClear = () => {
    setValue("");
    setInputQuestion({});
  };

  const renderCheckboxInput = () => (
    <Stack paddingX={18} marginTop={10}>
      <h1>{question.question[0]}</h1>
      {question?.question.map((value, index) => (
        <Stack key={index}>
          <Checkbox
            name={question.question[0]}
            defaultChecked={oldDataAnswer.includes(value)}
            onChange={onChange}
            value={value}
          >
            {value}
          </Checkbox>
        </Stack>
      ))}
    </Stack>
  );

  const renderTextareaInput = () => (
    <Box paddingX={18} marginTop={10}>
      <h1>{question.question[0]}</h1>
      <Box marginTop={5}>
        <Textarea
          autoFocus
          name={question.question[0]}
          width={"40vw"}
          cols="20"
          rows="10"
          onChange={onChange}
          value={value}
        ></Textarea>
      </Box>
    </Box>
  );

  const renderTextInput = () => (
    <Box paddingX={18} marginTop={10}>
      <h1>{question.question[0]}</h1>
      <Box marginTop={5} width={"50vw"}>
        <Input
          autoFocus
          type="text"
          name={question.question[0]}
          onChange={onChange}
          value={value}
        />
      </Box>
    </Box>
  );

  const renderInput = () => {
    switch (type) {
      case "checkbox":
        return renderCheckboxInput();
      case "textarea":
        return renderTextareaInput();
      case "text":
        return renderTextInput();
      default:
        return null;
    }
  };

  return (
    <>
      {renderInput()}
      <ButtonQuestion
        onClear={onClear}
        inputQuestion={inputQuestion}
        setInputQuestion={setInputQuestion}
        idQuestion={idQuestion}
      />
    </>
  );
};

export default TypeCondition;
