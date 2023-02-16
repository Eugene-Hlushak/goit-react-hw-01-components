import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  width: 300px;
  background-color: #fff;
  text-align: center;
`;

export const Box = styled.div`
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 240px;
  margin-bottom: 15px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Info = styled.p`
  color: gray;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: calc(100% / 3);
  height: 100px;
  text-align: center;
  border: 1px solid black;
  background-color: #d8d8d8;
`;

export const Label = styled.span`
  font-size: 16px;
  color: gray;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
