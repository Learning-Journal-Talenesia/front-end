import { Flex, IconButton, Skeleton } from "@chakra-ui/react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useSidebar } from "../../context/Sidebar.context";
import SidebarNumber from "./SidebarNumber";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useMemo } from "react";
import dummyData from "../../dummyData/data";

const Sidebar = () => {
  const {
    isExpand,
    onExpandClick,
    sidebarTotalPage,
    setSidebarTotalPage,
    setSidebarData,
    setJourney,
  } = useSidebar();

  const { class_id, theme_id, number } = useParams();
  const history = useHistory();

  useEffect(() => {
    const theme = dummyData.themes.filter(
      ({ id }) => id === Number(theme_id)
    )[0];
    setSidebarTotalPage(theme.journal.length);
    setSidebarData({ class_name: dummyData.name, theme_name: theme.name });
    setJourney(
      dummyData.themes.map((theme) => ({ id: theme.id, name: theme.name }))
    );
  }, [setJourney, setSidebarData, setSidebarTotalPage, theme_id]);

  const numberComponent = useMemo(() => {
    return Array.from({ length: sidebarTotalPage }).map((_, index) => (
      <SidebarNumber
        key={index}
        index={index}
        isActive={index === Number(number) - 1}
        onClick={() => {
          history.push(
            `/class/${class_id}/theme/${theme_id}/number/${index + 1}`
          );
        }}
      />
    ));
  }, [class_id, history, number, sidebarTotalPage, theme_id]);

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
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} w="40px" h="40px" borderRadius="full" />
        ))}

        {numberComponent}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
