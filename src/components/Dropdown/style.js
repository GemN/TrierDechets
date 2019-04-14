import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { green1 } from '../../constants/general';

export const Container = styled.div`
  font-size: 14px;
  color: #333333;
  font-weight: 500;
  text-decoration: none;
  margin-right: 38px;
  transition: 0.2s color ease-in;
  cursor: pointer;
  position: relative;
  &:hover {
    color: ${green1};
  }
`;

const fadeInAnimation = keyframes`${fadeIn}`;

export const Menu = styled.div`
  position: absolute;
  cursor: auto;
  top: 40px;
  left: -20px;
  z-index: 11;
  animation: 0.2s ${fadeInAnimation};
`;

export const Card = styled.div`
  box-shadow: 0 0 33px 0 rgba(21, 44, 72, 0.1);
  margin-top: 16px;
  padding: 16px;
  background-color: white;
  position: relative;
  border-radius: 10px;
  &:before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    bottom: 100%;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid white;
    left: 30px;
    background-color: transparent;
    z-index: 12;
  }
`;
