import styled from 'styled-components';

export default styled.div`
  max-width: ${p => (p.width ? `${p.width}px` : '100%')};
  width: 100%;
  margin: auto;
  padding: 16px;
  background-color: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`;
