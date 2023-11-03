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

const Habit = ({ questionIndex }) => {
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
          <Tr>
            <Td>
              <FormControl>
                <Input size="sm" type="text" />
              </FormControl>
            </Td>
            <Td>
              <FormControl>
                <Input size="sm" type="text" />
              </FormControl>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <FormControl>
                <Input size="sm" type="text" />
              </FormControl>
            </Td>
            <Td>
              <FormControl>
                <Input size="sm" type="text" />
              </FormControl>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <FormControl>
                <Input size="sm" type="text" />
              </FormControl>
            </Td>
            <Td>
              <FormControl>
                <Input size="sm" type="text" />
              </FormControl>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <FormControl>
                <Input size="sm" type="text" />
              </FormControl>
            </Td>
            <Td>
              <FormControl>
                <Input size="sm" type="text" />
              </FormControl>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <FormControl>
                <Input size="sm" type="text" />
              </FormControl>
            </Td>
            <Td>
              <FormControl>
                <Input size="sm" type="text" />
              </FormControl>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Habit;
