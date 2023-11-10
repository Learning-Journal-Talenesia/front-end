import {
  Box,
  Button,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";

const AboutClassView = () => {
  return (
    <main>
      <Box marginTop={20} mx={40}>
        <HeadingBox m="auto">Kelas intensif - Admin Perkantoran</HeadingBox>
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
          <Button variant="secondary">Kembali</Button>
          <Button variant="primary" px={8}>Lanjut</Button>
        </Box>
      </Box>
    </main>
  );
};

export default AboutClassView;
