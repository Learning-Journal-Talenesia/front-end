import { Fragment, useEffect, useState } from "react";
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
  Skeleton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams, useHistory } from "react-router-dom";
import dummyData from "../dummyData/data";
import Journal from "../components/Journal";
import HeadingBox from "../components/HeadingBox";

const JournalPage = () => {
  const { isExpand, sidebarTotalPage, sidebarData } = useSidebar();
  const { class_id, theme_id, number } = useParams();
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  useEffect(() => {
    setData(
      dummyData.themes.filter(({ id }) => id === Number(theme_id))[0].journal[
        Number(number) - 1
      ]
    );
  }, [number, theme_id]);

  const backOnClick = () => {
    if (Number(number) === 1) {
      history.push(`/class/${class_id}/theme/${theme_id}`);
    } else {
      history.push(
        `/class/${class_id}/theme/${theme_id}/number/${Number(number) - 1}`
      );
    }
  };

  const nextOnClick = () => {
    if (Number(number) === sidebarTotalPage) {
      onOpen();
    } else {
      history.push(
        `/class/${class_id}/theme/${theme_id}/number/${Number(number) + 1}`
      );
    }
  };

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
        {/* <Box pr="6">
          <Skeleton w="400px" h="50px" borderRadius="full" />
          <Flex mt="3" justifyContent="space-between">
            <Skeleton w="150px" h="20px" />
            <Skeleton w="40px" h="20px" />
          </Flex>
        </Box>

        <Box flex="1" overflowY="scroll" pr="3">
          <Flex direction="column" gap="3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Fragment key={index}>
                <Skeleton w="300px" h="24px" />
                <Skeleton w="100%" h="80px" />
              </Fragment>
            ))}
          </Flex>
        </Box>

        <Flex justifyContent="space-between" pr="6">
          <Skeleton w="100px" h="40px" borderRadius="full" />
          <Skeleton w="100px" h="40px" borderRadius="full" />
        </Flex> */}

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
          <Button variant="secondary" onClick={backOnClick}>
            Kembali
          </Button>
          <Button variant="primary" onClick={nextOnClick}>
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
