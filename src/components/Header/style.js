import styled from 'styled-components';
import media from '../../constants/media';

export const Container = styled.div`
  //  background: linear-gradient(to right, #56ab2f, #a8e063);
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
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
