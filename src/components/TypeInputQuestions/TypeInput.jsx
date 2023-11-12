import { Box, Checkbox, Input, Stack, Textarea } from "@chakra-ui/react";
import ButtonQuestion from "../Questions/Button";
import { useState, useEffect } from "react";
import useStoreQuestion from "../../lib/zustand/Question";

const TypeCondition = ({ type, question, idQuestion }) => {
  const [value, setValue] = useState("");
  const [inputQuestion, setInputQuestion] = useState("");

  const oldData = useStoreQuestion((state) => state.answer);
  const oldDataQuestion = oldData[idQuestion];

  useEffect(() => {
    if (oldDataQuestion) {
      setValue(oldDataQuestion);
    }
  }, [oldDataQuestion]);

  const onChange = (e) => {
    e.preventDefault();
    const updatedInputQuestion = {
      ...inputQuestion,
      [e.target.name]: e.target.value,
    };
    setInputQuestion(updatedInputQuestion);
    setValue(e.target.value);
  };

  const onClear = () => {
    setValue("");
  };

  const renderCheckboxInput = () => (
    <Stack paddingX={18} marginTop={10}>
      {question?.question.map((value, index) => (
        <Stack key={index}>
          <Checkbox name={index}>{value}</Checkbox>
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
          name={question._id}
          id={question._id}
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
          name={question._id}
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
