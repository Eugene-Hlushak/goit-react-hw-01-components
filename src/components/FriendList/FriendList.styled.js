import styled from 'styled-components';

export const List = styled.ul`
  width: 200px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  padding-left: 10px;
  display: flex;

  align-items: center;
  height: 60px;
  margin-bottom: 10px;
  gap: 10px;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 2px 2px 15px 1px gray;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
