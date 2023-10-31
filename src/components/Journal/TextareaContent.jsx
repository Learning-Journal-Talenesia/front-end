import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const TextareaContent = ({ content }) => {
  return (
    <FormControl mb="3">
      <FormLabel>{content}</FormLabel>
      <Textarea placeholder="Silahkan tulis di sini" />
    </FormControl>
  );
};

export default TextareaContent;
