import styled from 'styled-components';
import { green1, green2 } from '../../constants/general';

export default styled.button`
  background: ${p =>
    p.disabled ? 'gray' : `linear-gradient(to right, ${green1}, ${green2})`};
  transition: 0.2s all ease-in;
  border: 0;
  font-size: 13px;
  color: white;
  width: 150px;
  height: 40px;
  cursor: pointer;
  text-transform: uppercase;
  line-height: 44px;
  border-radius: 2px;
  font-weight: bold;
  &:hover {
    opacity: 0.9;
  }
`;
