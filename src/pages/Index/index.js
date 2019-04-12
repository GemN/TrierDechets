import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import {
  BgImage,
  BgContent,
  Text,
  BgTitle,
  BgHeadline,
  BrowseButton,
} from './style';
import { withNamespaces } from '../../../i18n';
import HowItWorks from './blocks/HowItWorks';

class Index extends React.PureComponent {
  static async getInitialProps() {
    return {
      namespacesRequired: ['homepage', 'header'],
    };
  }

  hiw = [
    { img: '/static/assets/hiw/open_maps.svg', title: 'find-trash' },
    { img: '/static/assets/hiw/recycle_waste.svg', title: 'recycle' },
  ];

  props: {
    t: Function,
  };

  render() {
    const { t } = this.props;

    return (
      <Layout title="Home">
        <BgImage>
          <BgContent>
            <Text>
              <BgTitle>{t('title')}</BgTitle>
              <BgHeadline>{t('headline')}</BgHeadline>
              <Link href="/browse">
                <BrowseButton>{t('browse-now')}</BrowseButton>
              </Link>
            </Text>
          </BgContent>
        </BgImage>
        <HowItWorks />
      </Layout>
    );
  }
}

export default withNamespaces('homepage')(Index);
