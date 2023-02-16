import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  box-shadow: 8px 8px 10px 2px gray;
`;
export const Row = styled.tr`
  height: 50px;
  &:nth-child(even) {
    background-color: lightgray;
  }
`;

export const Head = styled.th`
  text-transform: uppercase;
  background-color: cyan;
`;

export const Type = styled.td`
  text-transform: capitalize;
`;
