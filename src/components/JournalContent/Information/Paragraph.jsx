import { Heading, Text } from "@chakra-ui/react";

const Paragraph = ({ data }) => {
  return (
    <>
      <Heading>{data.heading}</Heading>
      <Text mb="3">{data.content}</Text>
    </>
  );
};

export default Paragraph;
