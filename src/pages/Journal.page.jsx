import { useEffect, useState } from "react";
import { useSidebar } from "../context/Sidebar.context";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import dummyData from "../dummyData/data";
import JournalContent from "../components/JournalContent";

const JournalPage = () => {
  const { isExpand, setSidebarTotalPage, setSidebarData } = useSidebar();
  const { kelas_id, tema_id, nomor } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    setSidebarTotalPage(
      dummyData.tema.filter((tema) => tema.tema_id === Number(tema_id))[0]
        .journal.length
    );
    setSidebarData({
      kelas_name: dummyData.name,
      tema_name: dummyData.tema.filter(
        (tema) => tema.tema_id === Number(tema_id)
      )[0].name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setData(
      dummyData.tema.filter((tema) => tema.tema_id === Number(tema_id))[0]
        .journal[nomor - 1]
    );
  }, [nomor, tema_id]);

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
      <Box flex="1" overflowY="scroll" pr="3">
        <JournalContent data={data} />
      </Box>
      <Flex justifyContent="space-between" pr="6">
        <Button variant="secondary">Kembali</Button>
        <Button variant="primary">Lanjut</Button>
      </Flex>
    </Flex>
  );
};

export default JournalPage;
