import { Button, Center, Image } from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import logoHero from "../assets/img/logo/logo-hero.svg";

const CompletePage = () => {
  return (
    <Center h="calc(100vh - 70px)" flexDirection="column">
      <Image src={logoHero} w="330px" h="200px"></Image>
      <HeadingBox my="8">Terima Kasih Sudah Mengisi Jurnal Belajar</HeadingBox>
      <Button variant="primary" onClick={() => {}}>
        Kembali ke LMS
      </Button>
    </Center>
  );
};

export default CompletePage;
