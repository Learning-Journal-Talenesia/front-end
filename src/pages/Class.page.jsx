import { Button, Center, Flex, Image, Select, Text } from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import logoHero from "../assets/img/logo/logo-hero.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dummyData from "../dummyData/data";
import { useSidebar } from "../context/Sidebar.context";

const ClassPage = () => {
  const { kelas_id, tema_id } = useParams();
  const [data, setData] = useState({ kelas_name: "", tema_name: "" });

  useEffect(() => {
    setData({
      kelas_name: dummyData.name,
      tema_name: dummyData.tema.filter(
        (tema) => tema.tema_id === Number(tema_id)
      )[0]?.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Center h="calc(100vh - 70px)" flexDirection="column">
      <Image src={logoHero} w="330px" h="200px" mb="8"></Image>
      <HeadingBox>{data.kelas_name}</HeadingBox>
      <Text my="3" textColor="app.blue.active" fontWeight="bold">
        {data.tema_name}
      </Text>
      <Select placeholder="Mentor" w="unset" mb="8">
        <option value="mentor1">Mentor 1</option>
        <option value="mentor2">Mentor 2</option>
        <option value="mentor3">Mentor 3</option>
      </Select>
      <Flex gap="3">
        <Button variant="secondary">Kembali</Button>
        <Button variant="primary">Mulai</Button>
      </Flex>
    </Center>
  );
};

export default ClassPage;
