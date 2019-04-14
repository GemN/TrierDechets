import styled, { keyframes } from 'styled-components';
import { fadeInRight, fadeIn } from 'react-animations';
import media from '../../../constants/media';
import { green1 } from '../../../constants/general';

export const MobileBurger = styled.div`
  font-size: 18px;
  text-decoration: none;
  text-align: right;
  cursor: pointer;
  color: #979797;
  transition: 0.2s color ease-in;
  &:hover {
    color: ${green1};
  }
  padding-right: 18px;
`;

const fadeInAnimation = keyframes`${fadeIn}`;

export const Mask = styled.div`
  display: none;
  animation: 0.2s ${fadeInAnimation};
  ${media.desktop`
    display: flex;
  `}
  transition: 0.2s all ease-in;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(12, 20, 40, 0.85);
  z-index: 15;
`;

const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const MobileMenu = styled.div`
  width: 307px;
  display: flex;
  flex: 1;
  overflow-y: auto;
  background-color: white;
  padding: 28px 0 42px;
  transition: 0.2s all ease-in;
  flex-direction: column;
  z-index: 16;
  animation: 0.2s ${fadeInRightAnimation};
  ${media.phone`
    width: 275px;
  `}
  ${media.xsPhone`
    width: 250px;
  `}
`;

export const MobileNavLink = styled.a`
  font-size: 14px;
  color: #333333;
  text-decoration: none;
  margin-top: 20px;
  padding: 0 24px;
  transition: 0.2s color ease-in;
  &:hover {
    color: ${green1};
  }
`;
