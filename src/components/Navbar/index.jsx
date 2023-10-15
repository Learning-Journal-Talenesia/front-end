import { Box, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      zIndex={1}
      boxShadow="md"
      px="5"
      py="3"
      w="100%"
      align="center"
      pos="fixed"
      top="0"
      left="0"
      bgColor="white"
    >
      <Box w="70px" h="30px" bgColor="app.purple"></Box>
      <Text>Username</Text>
    </Flex>
  );
};

export default Navbar;
