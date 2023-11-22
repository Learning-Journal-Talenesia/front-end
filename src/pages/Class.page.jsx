import { Button, Center, Flex, Image, Select, Text } from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import logoHero from "../assets/img/logo/logo-hero.svg";
import { useHistory, useLocation, useParams } from "react-router-dom";

const ClassPage = () => {
  const { search } = useLocation();
  const queryParam = new URLSearchParams(search);
  const user = {
    nama: queryParam.get("nama"),
    namaKelas: queryParam.get("kelas"),
  };
  if (user.namaKelas !== null || user.namaKelas !== null) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  const { thema_id } = useParams();
  const { user_id } = useParams();
  const namaKelas = JSON.parse(localStorage.getItem("user")).namaKelas;

  const history = useHistory();

  const handleMulai = () => {
    history.push(`/user/about/${user_id}/journal/${thema_id}`);
  };

  return (
    <Center h="calc(100vh - 70px)" flexDirection="column">
      <Image src={logoHero} w="330px" h="200px" mb="8"></Image>
      <HeadingBox>{!user.namaKelas ? namaKelas : user.namaKelas}</HeadingBox>
      <Text my="3">Learning Journal</Text>
      <Select placeholder="Mentor" w="unset" mb="8">
        <option value="mentor1">Rafiansyah</option>
        <option value="mentor2">M Rafi</option>
        <option value="mentor3">Darman</option>
      </Select>
      <Flex gap="3">
        <Button variant="secondary">Kembali</Button>
        <Button onClick={() => handleMulai()} variant="primary">
          Mulai
        </Button>
      </Flex>
    </Center>
  );
};

export default ClassPage;
