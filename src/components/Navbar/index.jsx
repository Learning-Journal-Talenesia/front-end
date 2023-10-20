import { Flex, Image, Text } from "@chakra-ui/react";
import LogoNav from "../../assets/img/logo/logo-nav.svg";

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      zIndex={1}
      boxShadow="md"
      px="5"
      py="1.5"
      w="100%"
      align="center"
      pos="fixed"
      top="0"
      left="0"
      bgColor="white"
    >
      <Image src={LogoNav} h="40px"></Image>
      <Text>Username</Text>
    </Flex>
  );
};

export default Navbar;
