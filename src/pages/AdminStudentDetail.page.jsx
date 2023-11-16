import { Heading } from "@chakra-ui/react";
import HeadingBox from "../components/HeadingBox";
import { BsArrowReturnRight } from "react-icons/bs";

const AdminStudentDetailPage = () => {
  const data = {
    id: 0,
    name: "Kelas Intensif - Cepat Kerja Jadi Admin Perkantoran",
    theme: { id: 0, name: "Tema 0: Sesi Perkenalan" },
    student: { id: 0, name: "Chevro Gentle Mind" },
    question: [],
    asnwer: [],
  };

  return (
    <>
      <HeadingBox my="3">{data.student.name}</HeadingBox>
      <Heading fontSize="lg" textColor="app.blue.active">
        {data.name}
      </Heading>
      <Heading fontSize="lg" textColor="app.blue.active" display="flex" gap="3">
        <BsArrowReturnRight />
        {`${data.theme.name}`}
      </Heading>
    </>
  );
};

export default AdminStudentDetailPage;
