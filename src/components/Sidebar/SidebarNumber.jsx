import { Center } from "@chakra-ui/react";

const SidebarNumber = ({ index, isActive, onClick }) => {
  return (
    <Center
      w="40px"
      h="40px"
      bgColor={isActive ? "app.blue.active" : "app.purple.active"}
      borderRadius="full"
      textColor="white"
      cursor={isActive ? "default" : "pointer"}
      onClick={onClick}
      _hover={{
        bgColor: isActive ? "app.blue.active" : "app.purple.hover",
      }}
    >
      {index + 1}
    </Center>
  );
};

export default SidebarNumber;
