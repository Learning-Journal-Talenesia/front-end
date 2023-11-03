import { FormControl, Input, ListItem, OrderedList } from "@chakra-ui/react";

const InputOL = ({ content, questionIndex }) => {
  return (
    <OrderedList>
      {content.map((text, index) => (
        <ListItem mb="3" key={index}>
          <FormControl>
            <Input size="sm" type="text" placeholder={text} />
          </FormControl>
        </ListItem>
      ))}
    </OrderedList>
  );
};

export default InputOL;
