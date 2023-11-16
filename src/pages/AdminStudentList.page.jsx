import {
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import { useHistory } from "react-router-dom";

const AdminStudentListPage = () => {
  const data = {
    id: 0,
    name: "Kelas Intensif - Cepat Kerja Jadi Admin Perkantoran",
    theme: { id: 0, name: "Tema 0: Sesi Perkenalan" },
    students: [
      { id: 0, name: "Chevro Gentle Mind" },
      { id: 1, name: "Mandro The Voiceless" },
      { id: 2, name: "Govnyss The Clumsy One" },
      { id: 3, name: "Beonirth The Evil One" },
      { id: 4, name: "Ferves Destroyer Of Life" },
      { id: 5, name: "Frurgenth Redeemer Of Men" },
      { id: 6, name: "Kaildredut Lady Of The Blue" },
      { id: 7, name: "Yphuntys The Warrior" },
      { id: 8, name: "Fioma The Firestarter" },
      { id: 9, name: "Ulboss The Great" },
    ],
  };

  const history = useHistory();

  return (
    <>
      <HeadingBox my="3">{data.name}</HeadingBox>
      <Heading fontSize="lg" textColor="app.blue.active">
        {data.theme.name}
      </Heading>
      <Table variant="simple" my="3">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th colSpan="2" textAlign="center">
              Action
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.students.map(({ id, name }) => (
            <Tr key={id}>
              <Td py="2">{name}</Td>
              <Td py="2" w="100px">
                <Button variant="secondary" size="sm">
                  Download
                </Button>
              </Td>
              <Td py="2" w="100px">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    history.push(
                      `/admin/class/${data.id}/theme/${data.theme.id}/student/${id}`
                    )
                  }
                >
                  Lihat
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default AdminStudentListPage;
