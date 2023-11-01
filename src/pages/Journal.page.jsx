import { useEffect, useState } from "react";
import { useSidebar } from "../context/Sidebar.context";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import dummyData from "../dummyData/data";
import Journal from "../components/Journal";
import HeadingBox from "../components/HeadingBox";

const JournalPage = () => {
  const { isExpand, sidebarTotalPage, sidebarData } = useSidebar();
  const { class_id, theme_id, number } = useParams();
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setData(
      dummyData.themes.filter(({ id }) => id === Number(theme_id))[0].journal[
        Number(number) - 1
      ]
    );
  }, [number, theme_id]);

  return (
    <>
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
          <Button
            variant="primary"
            onClick={Number(number) === sidebarTotalPage ? onOpen : () => {}}
          >
            Lanjut
          </Button>
        </Flex>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selesai</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Pastikan data yang sudah Anda isi sudah benar</ModalBody>
          <ModalFooter>
            <ModalFooter>
              <Button onClick={onClose} mr={3} variant="secondary" size="sm">
                Batal
              </Button>
              <Button onClick={() => {}} variant="primary" size="sm">
                Simpan
              </Button>
            </ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JournalPage;
