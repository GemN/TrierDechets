import styled from 'styled-components';
// import Button from '../../components/UI/Button';

export const Container = styled.div`
  height: calc(100vh - 90px);
  overflow: hidden;
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
