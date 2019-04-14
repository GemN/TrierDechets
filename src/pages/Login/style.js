import styled from 'styled-components';
import media from '../../constants/media';

export const Container = styled.div`
  min-height: calc(100vh - 90px);
  padding: 64px;
  ${media.phone`
    padding: 32px 8px;
  `}
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 6px;
  border-radius: 2px;
  width: 200px;
  border: 1px solid #d5d5d5;
`;
export const ContainerInput = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.div`
  margin-bottom: 4px;
  font-weight: 300;
  width: 100px;
`;
export const Inputs = styled.div`
  margin: 16px 0;
  text-align: left;
`;

export const Content = styled.div`
  padding: 16px 0;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;
