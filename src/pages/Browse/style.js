import styled from 'styled-components';
import { green2 } from '../../constants/general';

export const Container = styled.div`
  height: calc(100vh - 90px);
  overflow: hidden;
  position: relative;
`;

export const MyLocation = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  & i {
    font-size: 20px;
    color: ${'#32ff6d'};
  }
`;

export const Buttons = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

export const ToggleButton = styled.div`
  width: 50px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  z-index: 10;
  ${p =>
    p.active
      ? `
    background-color: ${green2};
    color: white;
  `
      : ''}
`;
