import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useSidebar } from "../../context/Sidebar.context";
import SidebarNumber from "./SidebarNumber";

const Sidebar = () => {
  const { isOpen, isExpand, onExpandClick } = useSidebar();

  return (
    <Box
      p="16px"
      bgColor="gray.100"
      w={isExpand ? "216px" : "72px"}
      maxW={isExpand ? "216px" : "72px"}
      display={isOpen ? "block" : "none"}
      h="100vh"
      maxH="100vh"
      position="fixed"
      pt="70px"
      transition="0.3s ease"
    >
      <Flex justifyContent="flex-end" mb="3">
        <IconButton
          isRound={true}
          onClick={onExpandClick}
          variant="primary"
          icon={isExpand ? <FaAngleLeft /> : <FaAngleRight />}
        />
      </Flex>
      <Flex
        flexWrap="wrap"
        alignContent="flex-start"
        justifyContent="flex-start"
        gap="8px"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SidebarNumber number={index + 1} isActive={index === 0} />
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
