import { Box, Center, Flex } from "@chakra-ui/react";
import Content from "./Content";

const Journal = ({ data }) => {
  if (data.length > 1) {
    return (
      <Box flex="1" overflowY="scroll" pr="3">
        <Flex direction="column" gap="3">
          {data.map(({ type, content }, index) => (
            <Content key={index} type={type} content={content} />
          ))}
        </Flex>
      </Box>
    );
  }
  if (data.length === 1) {
    return (
      <Center flex="1" pr="6" textAlign="center">
        <Content type={data[0].type} content={data[0].content} />
      </Center>
    );
  }
};

export default Journal;
