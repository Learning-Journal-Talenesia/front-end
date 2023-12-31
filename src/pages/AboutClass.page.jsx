import {
  Box,
  Button,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import { useHistory, useParams } from "react-router";

const AboutClassPage = () => {
  const history = useHistory();
  const namaKelas = JSON.parse(localStorage.getItem("user")).namaKelas;
  const { thema_id } = useParams();
  const { user_id } = useParams();
  const handleNext = () => {
    history.push(`/user/tema/${user_id}/journal/${thema_id}`);
  };
  const handleBack = () => {
    history.push(`/user/${user_id}/journal/${thema_id}`);
  };
  return (
    <main>
      <Box marginTop={20} mx={{ base: 10, md: 40 }}>
        <HeadingBox m="auto" textAlign="center">
          {namaKelas}
        </HeadingBox>
        <Heading
          size="sm"
          marginTop={2}
          color="app.blue.active"
          textAlign="center"
        >
          Learning Journal
        </Heading>

        <Box marginTop={10}>
          <Heading size="lg">Apa saja isi jurnal ini?</Heading>
          <Text mt={2}>
            Jurnal belajar ini bertujuan untuk membantu kamu untuk merefleksikan
            perjalanan belajar di fullstack bersama Talenesia. Jurnal ini berisi
            beberapa pertanyaan yang perlu dijawab. Tenang, tidak ada penilaian
            dari jawaban di jurnal ini. semua jawaban adalah benar.
          </Text>
          <Heading mt={4} size="lg">
            Journal ini berisi:
          </Heading>
          <OrderedList mt={2} pl={4}>
            <ListItem>Tujuan belajar di fullstack</ListItem>
            <ListItem>Habit Tracker</ListItem>
            <ListItem>Pertanyaan reflektf</ListItem>
            <ListItem>Checkis tugas</ListItem>
            <ListItem>checklis behaviour</ListItem>
            <ListItem>
              Catatan yang bisa digunakan untuk mencatat materi
            </ListItem>
          </OrderedList>
        </Box>
        <Box mt={10} display="flex" justifyContent="space-between">
          <Button onClick={() => handleBack()} variant="secondary">
            Kembali
          </Button>
          <Button onClick={() => handleNext()} variant="primary" px={8}>
            Lanjut
          </Button>
        </Box>
      </Box>
    </main>
  );
};

export default AboutClassPage;
