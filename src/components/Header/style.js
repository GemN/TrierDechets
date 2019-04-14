import styled from 'styled-components';
import media from '../../constants/media';
import { green1 } from '../../constants/general';

export const Container = styled.div`
  //  background: linear-gradient(to right, #56ab2f, #a8e063);
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;

export const NavLink = styled.a`
  color: #333333;
  margin: 0 16px;
  transition: 0.2s all ease-in;
  cursor: pointer;
  &:hover {
    color: #56ab2f;
  }
`;

export const ContainerLinks = styled.div`
  ${media.phone`
    display: none;
  `}
`;

export const Logo = styled.div`
  text-align: left;
  flex: 1;
  padding: 0 16px;
  text-transform: uppercase;
  & a {
    text-decoration: none;
    font-family: 'Bungee', cursive;
    font-size: 25px;
    line-height: 50px;
  }
`;

export const Burger = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  ${media.phone`
    display: flex;
  `}
  & i {
    cursor: pointer;
    transition: 0.2s all ease-in;
    &:hover {
      color: ${green1};
    }
  }
`;
