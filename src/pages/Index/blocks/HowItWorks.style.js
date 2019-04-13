import styled from 'styled-components';
import { green2 } from '../../../constants/general';
import media from '../../../constants/media';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  ${media.phone`
    margin-top: 40px;
    flex-direction: column;
  `}
`;
export const Element = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${media.tablet`
    margin-bottom: 64px;
    width: 50%;
  `}
  ${media.phone`
    width: 100%;
  `}
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
  ${media.phone`
     padding: 40px 16px 64px 16px;
  `}
`;

export const TitleHiw = styled.h2`
  font-size: 32px;
`;
