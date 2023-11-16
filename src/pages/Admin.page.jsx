import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const AdminPage = () => {
  const data = [
    {
      id: 0,
      name: "Kelas Intensif - Cepat Kerja Jadi Admin Perkantoran",
      themes: [
        { id: 0, name: "Tema 0: Sesi Perkenalan" },
        { id: 1, name: "Tema 1: Berkarir Sebagai Admin" },
        { id: 2, name: "Tema 2: Persiapan keahlian sebagai admin" },
        { id: 3, name: "Tema 3: Mengerjakan Tugas-Tugas  Administratif" },
        {
          id: 4,
          name: "Tema 4: Pengelolaan dan Pengorganisiran Aktivitas Kantor",
        },
        { id: 5, name: "Tema 5: Mengurus Sarana dan Prasarana Kantor" },
        { id: 6, name: "Tema 6: Mengurus keuangan operasional kantor" },
        { id: 7, name: "Tema 7: Membantu Kegiatan HR" },
        { id: 8, name: "Tema 8: Persiapan Kerja" },
      ],
    },
    {
      id: 1,
      name: "Kelas Intensif - Cepat Kerja Jadi Admin Perkantoran",
      themes: [
        { id: 0, name: "Tema 0: Sesi Perkenalan" },
        { id: 1, name: "Tema 1: Berkarir Sebagai Admin" },
        { id: 2, name: "Tema 2: Persiapan keahlian sebagai admin" },
        { id: 3, name: "Tema 3: Mengerjakan Tugas-Tugas  Administratif" },
        {
          id: 4,
          name: "Tema 4: Pengelolaan dan Pengorganisiran Aktivitas Kantor",
        },
        { id: 5, name: "Tema 5: Mengurus Sarana dan Prasarana Kantor" },
        { id: 6, name: "Tema 6: Mengurus keuangan operasional kantor" },
        { id: 7, name: "Tema 7: Membantu Kegiatan HR" },
        { id: 8, name: "Tema 8: Persiapan Kerja" },
      ],
    },
  ];

  const history = useHistory();

  return (
    <Accordion allowMultiple p="3">
      {data.map(({ id, name, themes }) => (
        <AccordionItem key={id}>
          <AccordionButton>
            <Heading size="md" flex="1" textAlign="left">
              {name}
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table variant="simple">
              <Tbody>
                {themes.map((theme) => (
                  <Tr key={theme.id}>
                    <Td py="2">{theme.name}</Td>
                    <Td py="2" w="100px">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() =>
                          history.push(`/admin/class/${id}/theme/${theme.id}`)
                        }
                      >
                        Lihat
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AdminPage;
