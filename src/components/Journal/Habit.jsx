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

const Habit = ({ number, questionIndex }) => {
  const { answer, onAnswerChange } = useQuestion();
  const name = useMemo(
    () => `${number - 1}-${questionIndex}`,
    [number, questionIndex]
  );

  const onChange = useCallback(
    (name, value) => {
      onAnswerChange(name, value);
    },
    [onAnswerChange]
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
                      value={answer[`${name}-${index}-0`]}
                      onChange={(e) =>
                        onChange(`${name}-${index}-0`, e.target.value)
                      }
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl>
                    <Input
                      size="sm"
                      type="text"
                      value={answer[`${name}-${index}-1`]}
                      onChange={(e) =>
                        onChange(`${name}-${index}-1`, e.target.value)
                      }
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
