import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useSidebar } from "../../context/Sidebar.context";
import SidebarNumber from "./SidebarNumber";
import useStoreQuestion from "../../lib/zustand/Question";

const Sidebar = () => {
  const { isOpen, isExpand, onExpandClick } = useSidebar();
  const questions = useStoreQuestion((state) => state.questions);
  const loading = useStoreQuestion((state) => state.loading);

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
        {loading ? (
          <Box>Loading...</Box>
        ) : (
          questions.map((question, index) => (
            <SidebarNumber
              key={question._id}
              number={index + 1}
              isActive={question.isActive}
              _id={question._id}
            />
          ))
        )}
      </Flex>
    </Box>
  );
};

export default Sidebar;
