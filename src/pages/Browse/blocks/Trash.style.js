import styled from 'styled-components';

export const Container = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

export const TrashIcon = styled.span`
  width: 16px;
  font-size: 20px;
  height: 16px;
  & i {
    color: ${p => p.color};
  }
`;

export const Infos = styled.div`
  position: absolute;
  left: calc(100% + 10px);
  top: 0;
  background-color: white;
  z-index: 3;
  width: 200px;
  padding: 8px;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  font-size: 12px;
`;

export const ContainerTrashType = styled.div`
  line-height: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
`;

export const Address = styled.div`
  padding-top: 4px;
  margin-top: 4px;
  border-top: 1px solid #cecece;
`;

export const Fill = styled.div``;
export const FillLabel = styled.span`
  margin-right: 8px;
`;

export const Type = styled.div`
  margin-left: 10px;
`;
