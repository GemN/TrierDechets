import styled from 'styled-components';
import Button from '../../components/UI/Button';
import media from '../../constants/media';

export const BgImage = styled.div`
  background: url('/static/assets/bg.jpg') no-repeat top center;
  background-size: cover;
  height: calc(100vh - 40px);
  width: 100%;
  position: relative;
`;

export const BgContent = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.phone`
    //justify-content: flex-start;
  `}
`;

export const Text = styled.div`
  padding: 64px;
  max-width: 870px;
  width: 100%;
  ${media.tablet`
    padding: 32px;
  `}

  ${media.phone`
    padding: 8px;
  `}
`;
export const BgTitle = styled.h1`
  color: white;
  font-family: 'Bungee', cursive;
  font-size: 74px;
  ${media.phone`
    font-size: 32px;
  `}
`;
export const BgHeadline = styled.div`
  font-size: 36px;
  color: white;
  margin-top: 16px;
  ${media.phone`
    font-size: 22px;    
  `}
`;

export const BrowseButton = styled(Button)`
  margin-top: 32px;
`;
