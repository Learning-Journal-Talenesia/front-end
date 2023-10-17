import { Center } from "@chakra-ui/react";

const SidebarNumber = ({ number, isActive }) => {
  return (
    <Center
      w="40px"
      h="40px"
      bgColor={isActive ? "app.blue.active" : "app.purple.active"}
      borderRadius="full"
      textColor="white"
      cursor={isActive ? "default" : "pointer"}
      _hover={{
        bgColor: isActive ? "app.blue.active" : "app.purple.hover",
      }}
    >
      {number}
    </Center>
  );
};

export default SidebarNumber;
