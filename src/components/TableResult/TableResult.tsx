import styled from "styled-components";
import { Alphabet, Letters } from "../../App";

interface TableResultProps {
  frequencies: Alphabet;
  messageLength: number;
}

const Table = styled.table`
  font-size: 14px;
  border-spacing: 0;
  margin: 20px 0;
`;
const TableRow = styled.tr`
    height: 30px;
`;
const TableRowHeader = styled(TableRow)`
    background-color: #e6e6e6;
`
const TableCell = styled.td`
    width: 40px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TableResult: React.FC<TableResultProps> = ({
  frequencies,
  messageLength,
}) => {
  const table = Object.keys(frequencies);
  console.log(messageLength);
  return (
    <Container>
    <Table>
      <tbody>
        <TableRowHeader>
          {/* <RowHeader>-</RowHeader> */}
          {table.map((letter) => (
            <th key={letter}>{letter as Letters}</th>
          ))}
        </TableRowHeader>
        <TableRow>
          {/* <RowHeader>#</RowHeader> */}
          {table.map((letter) => (
            <TableCell key={letter}>{frequencies[letter as Letters]}</TableCell>
          ))}
        </TableRow>
        <TableRow>
          {/* <RowHeader>F</RowHeader> */}
          {table.map((letter) => (
            <TableCell key={letter}>
              {frequencies[letter as Letters]
                ? (frequencies[letter as Letters] / messageLength).toFixed(2)
                : 0.00.toFixed(2)}
            </TableCell>
          ))}
        </TableRow>
      </tbody>
    </Table>
    </Container>
  );
};

export default TableResult;
