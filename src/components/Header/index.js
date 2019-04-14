import React, { Fragment } from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import { withNamespaces } from '../../../i18n';
import { Container, NavLink, ContainerLinks, Logo, Burger } from './style';
import MobileNav from './blocks/MobileNav';
import { CONNECTED_USER } from '../../constants/graphql/query/user';

class Header extends React.PureComponent {
  state = {
    showMobileMenu: false,
  };

  showMobileMenu = () => this.setState({ showMobileMenu: true });

  hideMobileMenu = () => this.setState({ showMobileMenu: false });

  props: {
    t: Function,
  };

  render() {
    const { t } = this.props;
    const { showMobileMenu } = this.state;
    return (
      <Fragment>
        <Container>
          <Logo>
            <Link href="/">
              <a>Paris Recycle</a>
            </Link>
          </Logo>
          <ContainerLinks>
            <Link href="/browse">
              <NavLink>{t('browse')}</NavLink>
            </Link>
            <Query query={CONNECTED_USER}>
              {({ loading, error, data }) => {
                if (loading || error) return null;
                if (!data || !data.user) {
                  return (
                    <Fragment>
                      <Link href="/login">
                        <NavLink>{t('login')}</NavLink>
                      </Link>
                      <Link href="/register">
                        <NavLink>{t('register')}</NavLink>
                      </Link>
                    </Fragment>
                  );
                }
                const { email } = data.user;
                return <span>{email}</span>;
              }}
            </Query>
          </ContainerLinks>
          <Burger onClick={this.showMobileMenu}>
            <i className="fas fa-bars" />
          </Burger>
        </Container>
        {showMobileMenu && <MobileNav onClose={this.hideMobileMenu} />}
      </Fragment>
    );
  }
}

export default withNamespaces('header')(Header);
