import { Box, Input, Textarea } from "@chakra-ui/react";

const TypeCondition = ({ type, question }) => {
  console.log(question);
  if (type === "checkbox") {
    return (
      <>
        <Box paddingX={18} marginTop={10}>
          {question?.question.map((value, index) => (
            <>
              <input type="checkbox" name={index} value={value} key={index} />
              <label for={index}>{value}</label>
              <br />
            </>
          ))}
        </Box>
      </>
    );
  } else if (type === "textarea") {
    return (
      <>
        <Box paddingX={18} marginTop={10}>
          <h1>{question.question[0]}</h1>
          <Textarea
            autoFocus
            name={question._id}
            id={question._id}
            width={"40vw"}
            cols="20"
            rows="10"
          ></Textarea>
        </Box>
      </>
    );
  } else if (type === "text") {
    return (
      <>
        <Box paddingX={18} marginTop={10}>
          <h1>{question.question[0]}</h1>
          <Input type="text" name={question._id} />
        </Box>
      </>
    );
  }
};

export default TypeCondition;
