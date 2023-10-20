import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useSidebar } from "../../context/Sidebar.context";
import SidebarNumber from "./SidebarNumber";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const { isExpand, onExpandClick, sidebarTotalPage } = useSidebar();
  const { nomor } = useParams();

  return (
    <Flex
      p="16px"
      bgColor="gray.100"
      w={isExpand ? "236px" : "92px"}
      maxW={isExpand ? "236px" : "92px"}
      h="100vh"
      maxH="100vh"
      position="fixed"
      pt="68px"
      transition="0.3s ease"
      direction="column"
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
        flex="1"
        overflowY="scroll"
      >
        {Array.from({ length: sidebarTotalPage }).map((_, index) => (
          <SidebarNumber
            number={index + 1}
            isActive={index === Number(nomor - 1)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
