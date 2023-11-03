import {
  FormControl,
  HStack,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import Emote from "./Emote";

const EmoteContent = ({ content, questionIndex }) => {
  return (
    <FormControl mb="3" as="fieldset">
      <RadioGroup>
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
};

export default EmoteContent;
