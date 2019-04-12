import React from 'react';
import {
  Container,
  Element,
  Title,
  Image,
  ContainerHiw,
  TitleHiw,
} from './HowItWorks.style';
import { withNamespaces } from '../../../../i18n';

class HowItWorks extends React.PureComponent {
  hiw = [
    { img: '/static/assets/hiw/open_maps.svg', title: 'find-trash' },
    { img: '/static/assets/hiw/navigation.svg', title: 'check-bin' },
    { img: '/static/assets/hiw/recycle_waste.svg', title: 'recycle' },
  ];

  props: {
    t: Function,
  };

  render() {
    const { t } = this.props;

    return (
      <ContainerHiw>
        <TitleHiw>{t('how-it-works')}</TitleHiw>
        <Container>
          {this.hiw.map(e => (
            <Element key={e.title}>
              <Image src={e.img} alt={e.title} />
              <Title>{t(e.title)}</Title>
            </Element>
          ))}
        </Container>
      </ContainerHiw>
    );
  }
}

export default withNamespaces('homepage')(HowItWorks);
