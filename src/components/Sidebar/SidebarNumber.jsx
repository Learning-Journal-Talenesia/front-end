import { Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const SidebarNumber = ({ _id, number, isActive }) => {
  const history = useHistory();

  const handleClick = () => {
    if (!isActive) {
      history.push(`${_id}`);
    }
  };

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
      onClick={handleClick}
    >
      {number}
    </Center>
  );
};

export default SidebarNumber;
