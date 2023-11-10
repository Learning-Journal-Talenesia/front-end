import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useSidebar } from "../../context/Sidebar.context";
import SidebarNumber from "./SidebarNumber";
import useStoreQuestion from "../../lib/zustand/Question";
import { useEffect } from "react";

const Sidebar = () => {
  const { isOpen, isExpand, onExpandClick } = useSidebar();
  const questions = useStoreQuestion((state) => state.questions);
  const loading = useStoreQuestion((state) => state.loading);
  const numberId = useStoreQuestion((state) => state.current);
  useEffect(() => {
    if (questions.length > 0) {
      const updatedQuestions = questions.map((question) => {
        return {
          ...question,
          isActive: question._id === numberId,
        };
      });

      // Check if the state needs to be updated before updating it
      if (!isEqual(questions, updatedQuestions)) {
        useStoreQuestion.getState().setQuestions(updatedQuestions);
      }
    }
  }, [numberId, questions]);

  // Utility function to check if two arrays are equal
  function isEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

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
      <Flex justifyContent="flex-end" mt="10px" mb="3">
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
