import {
  FormControl,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useQuestion } from "../../context/Question.context";
import { useCallback, useMemo } from "react";

const Habit = () => {
  const { answer, onAnswerChange } = useQuestion();

  const onChange = useCallback(
    (index, type, value) => {
      onAnswerChange("habit", {
        ...answer["habit"],
        [index]: { ...answer["habit"][index], [type]: value },
      });
    },
    [answer, onAnswerChange]
  );

  const component = useMemo(() => {
    return (
      <TableContainer>
        <Table size="sm" css={{ tableLayout: "fixed" }}>
          <Thead>
            <Tr>
              <Th textAlign="center">Kebiasaan buruk yang ingin dirubah</Th>
              <Th textAlign="center">Kebiasaan pengganti</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <Tr key={index}>
                <Td>
                  <FormControl>
                    <Input
                      size="sm"
                      type="text"
                      value={answer["habit"][index]["bad"]}
                      onChange={(e) => onChange(index, "bad", e.target.value)}
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl>
                    <Input
                      size="sm"
                      type="text"
                      value={answer["habit"][index]["good"]}
                      onChange={(e) => onChange(index, "good", e.target.value)}
                    />
                  </FormControl>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  return component;
};

export default Habit;
