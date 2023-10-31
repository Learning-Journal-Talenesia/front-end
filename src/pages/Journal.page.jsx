import { useEffect, useState } from "react";
import { useSidebar } from "../context/Sidebar.context";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import dummyData from "../dummyData/data";
import Journal from "../components/Journal";
import HeadingBox from "../components/HeadingBox";

const JournalPage = () => {
  const { isExpand, sidebarTotalPage, sidebarData } = useSidebar();
  const { class_id, theme_id, number } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      dummyData.themes.filter(({ id }) => id === Number(theme_id))[0].journal[
        Number(number) - 1
      ]
    );
  }, [number, theme_id]);

  console.log(data);
  return (
    <Flex
      h="100vh"
      maxH="100vh"
      direction="column"
      pb="3"
      gap="3"
      pl="3"
      pt="68px"
      ml={isExpand ? "236px" : "92px"}
      transition="0.3s ease"
    >
      <Box pr="6">
        <HeadingBox size="md">{sidebarData.class_name}</HeadingBox>
        <Flex
          mt="3"
          justifyContent="space-between"
          fontWeight="bold"
          textColor="app.blue.active"
        >
          <Text>{sidebarData.theme_name}</Text>
          <Text>{`${number} / ${sidebarTotalPage}`}</Text>
        </Flex>
      </Box>
      <Journal data={data} />
      <Flex justifyContent="space-between" pr="6">
        <Button variant="secondary">Kembali</Button>
        <Button variant="primary">Lanjut</Button>
      </Flex>
    </Flex>
  );
};

export default JournalPage;
