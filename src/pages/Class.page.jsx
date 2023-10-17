import { Box, Button, Center, Flex, Select, Text } from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";

const ClassPage = () => {
  return (
    <Center h="calc(100vh - 70px)" flexDirection="column">
      <Box w="330px" h="200px" bgColor="app.purple.active" mb="20"></Box>
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
