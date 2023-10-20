import { Box, Center, Heading, Link, Text } from "@chakra-ui/react";

const CenterText = ({ data }) => {
  return (
    <Center
      textAlign="center"
      h="calc(100vh - 108px - 3rem - 72px)"
      flexDirection="column"
    >
      <Heading>{data.heading}</Heading>
      {data.content && <Link href={data.content}>{data.content}</Link>}
    </Center>
  );
};

export default CenterText;
