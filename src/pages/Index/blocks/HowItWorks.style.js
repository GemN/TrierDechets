import styled from 'styled-components';
import { green2 } from '../../../constants/general';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;
export const Element = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Title = styled.div`
  margin-top: 32px;
  font-size: 20px;
  border-bottom: 3px solid ${green2};
`;
export const Image = styled.img`
  height: 225px;
  width: 225px;
//  border: 10px solid ${green2};
//  padding: 16px;
  border-radius: 50%;
`;

export const ContainerHiw = styled.div`
  padding: 80px 64px 128px 64px;
  text-align: center;
`;

export const TitleHiw = styled.h2`
  font-size: 32px;
`;
