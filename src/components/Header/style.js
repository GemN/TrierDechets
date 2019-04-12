import styled from 'styled-components';

export const Container = styled.div`
  //  background: linear-gradient(to right, #56ab2f, #a8e063);
  height: 50px;
  line-height: 50px;
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
