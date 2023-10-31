import { Button, Center, Flex, Image, Select, Text } from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import logoHero from "../assets/img/logo/logo-hero.svg";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import dummyData from "../dummyData/data";

const ClassPage = () => {
  const { class_id, theme_id } = useParams();
  const [data, setData] = useState({ class_name: "", theme_name: "" });
  const history = useHistory();

  useEffect(() => {
    setData({
      class_name: dummyData.name,
      theme_name: dummyData.themes.filter(
        ({ id }) => id === Number(theme_id)
      )[0]?.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Center h="calc(100vh - 70px)" flexDirection="column">
      <Image src={logoHero} w="330px" h="200px" mb="8"></Image>
      <HeadingBox>{data.class_name}</HeadingBox>
      <Text my="3" textColor="app.blue.active" fontWeight="bold">
        {data.theme_name}
      </Text>
      <Select placeholder="Mentor" w="unset" mb="8">
        <option value="mentor1">Mentor 1</option>
        <option value="mentor2">Mentor 2</option>
        <option value="mentor3">Mentor 3</option>
      </Select>
      <Flex gap="3">
        <Button variant="secondary">Kembali</Button>
        <Button
          variant="primary"
          onClick={() =>
            history.push(`/class/${class_id}/theme/${theme_id}/number/1`)
          }
        >
          Mulai
        </Button>
      </Flex>
    </Center>
  );
};

export default ClassPage;
