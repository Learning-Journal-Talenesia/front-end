import { Box, Checkbox, Input, Stack, Textarea } from "@chakra-ui/react";
import ButtonQuestion from "../Questions/Button";
import { useState, useEffect } from "react";
import useStoreQuestion from "../../lib/zustand/Question";

const TypeCondition = ({ type, question, idQuestion }) => {
  const [value, setValue] = useState("");
  const [inputQuestion, setInputQuestion] = useState("");
  console.log("input question", inputQuestion);

  const oldData = useStoreQuestion((state) => state.answer);
  console.log(oldData);
  const oldDataQuestion = oldData[idQuestion];

  useEffect(() => {
    if (oldDataQuestion) {
      setValue(oldDataQuestion);
      setInputQuestion(oldDataQuestion);
    }
  }, [oldDataQuestion]);

  const onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    let updatedInputQuestion = {};
    if (question.inputType === "checkbox") {
      // Use an array to store the selected checkbox values
      const selectedCheckboxValues = inputQuestion[e.target.name] || [];

      // Update the array based on the checked state
      if (e.target.checked) {
        selectedCheckboxValues.push(e.target.value);
      } else {
        selectedCheckboxValues.splice(
          selectedCheckboxValues.indexOf(e.target.value),
          1
        );
      }

      updatedInputQuestion = {
        ...inputQuestion,
        [e.target.name]: selectedCheckboxValues,
      };
    } else {
      updatedInputQuestion = {
        ...inputQuestion,
        [e.target.name]: e.target.value,
      };
    }

    setInputQuestion(updatedInputQuestion);
    setValue(e.target.value);
  };

  const onClear = () => {
    setValue("");
    setInputQuestion("");
  };

  const renderCheckboxInput = () => (
    <Stack paddingX={18} marginTop={10}>
      <h1>{question.question[0]}</h1>
      {question?.question.map((value, index) => (
        <Stack key={index}>
          <Checkbox
            name={question.question[0]}
            defaultChecked={oldDataQuestion && oldDataQuestion.includes(value)}
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
          value={oldDataQuestion || value}
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
          value={oldDataQuestion || value}
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
