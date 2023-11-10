import { Button, Center, Flex, Image, Select, Text } from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import logoHero from "../assets/img/logo/logo-hero.svg";
import { useLocation } from "react-router-dom";

const ClassPage = () => {
  const { search } = useLocation();
  const queryParam = new URLSearchParams(search);
  const kelasID = queryParam.get("name");
  console.log(kelasID);
  return (
    <Center h="calc(100vh - 70px)" flexDirection="column">
      <Image src={logoHero} w="330px" h="200px" mb="8"></Image>
      <HeadingBox>Kelas Intensif - Admin Perkantoran</HeadingBox>
      <Text my="3">Learning Journal</Text>
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
