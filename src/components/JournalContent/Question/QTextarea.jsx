import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const QTextarea = ({ data }) => {
  return (
    <FormControl mb="3">
      <FormLabel>{data.text}</FormLabel>
      <Textarea placeholder="Silahkan tulis di sini" />
    </FormControl>
  );
};

export default QTextarea;
