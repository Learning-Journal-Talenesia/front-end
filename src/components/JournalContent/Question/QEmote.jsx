import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import Emote from "./Emote";

const QEmote = ({ data }) => {
  return (
    <FormControl mb="3" as="fieldset">
      <FormLabel as="legend">{data.text}</FormLabel>
      <RadioGroup>
        <HStack spacing="3">
          {data.emote.map((name, index) => (
            <VStack
              key={index}
              fontSize="4xl"
              textColor="app.blue.active
            "
            >
              <Emote name={name} />
              <Radio value={name}></Radio>
            </VStack>
          ))}
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};

export default QEmote;
