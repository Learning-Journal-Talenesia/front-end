import { FormControl, Input, ListItem, OrderedList } from "@chakra-ui/react";

const InputOL = ({ content }) => {
  return (
    <OrderedList>
      {content.map((text) => (
        <ListItem mb="3">
          <FormControl>
            <Input size="sm" type="text" placeholder={text} />
          </FormControl>
        </ListItem>
      ))}
    </OrderedList>
  );
};

export default InputOL;
