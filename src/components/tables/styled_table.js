import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 2.86vmin;
  div {
    border-radius: 12px;
    background-color: #cb1616;
  }
  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
  }
  hr {
    color: #0000001a;
  }
`;

export const Table = styled.table`
  td {
    border-bottom: 1px solid #0000001a;
    padding: 16px;
    height: 10px;
    width: 8vw;
  }

  thead td {
    font-size: 14px;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.05);
  }

  tbody td {
    font-size: 12px;
    font-weight: 400;
    background-color: rgba(217, 217, 217, 0.1);
  }
`;
