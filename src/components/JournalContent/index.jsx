import { Flex, Text } from "@chakra-ui/react";
import { useSidebar } from "../../context/Sidebar.context";
import HeadingBox from "../HeadingBox";
import { useParams } from "react-router-dom";
import Information from "./Information";
import Question from "./Question";

const JournalContent = ({ data }) => {
  const { sidebarData, sidebarTotalPage } = useSidebar();
  const { nomor } = useParams();

  return (
    <Flex direction="column" w="100%">
      <HeadingBox size="md">{sidebarData.kelas_name}</HeadingBox>
      <Flex
        my="3"
        justifyContent="space-between"
        fontWeight="bold"
        textColor="app.blue.active"
      >
        <Text>{sidebarData.tema_name}</Text>
        <Text>{`${nomor} / ${sidebarTotalPage}`}</Text>
      </Flex>
      {data.type === 1 && <Information data={data.data} />}
      {data.type === 2 && <Question data={data.data} />}
    </Flex>
  );
};

export default JournalContent;
