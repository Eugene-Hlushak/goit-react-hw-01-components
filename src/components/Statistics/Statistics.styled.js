import styled from 'styled-components';
import { getRandomHexColor } from './Statistics';
import data from '../../data.json';
export const Container = styled.section`
  width: 500px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

export const Title = styled.h2`
  margin-right: auto;
  margin-left: auto;
  /* height: 80px; */
  padding: 30px;
  font-size: 26px;
  font-weight: 700;
  background-color: lightgray;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  flex-basis: calc(100% / ${data.length});
  height: 100px;

  background-color: ${getRandomHexColor};
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 28px;
`;
