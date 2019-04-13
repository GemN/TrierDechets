import Link from 'next/link';
import { withNamespaces } from '../../../i18n';
import { Container, NavLink, ContainerLinks, Logo } from './style';

type Props = {
  t: Function,
};

const Header = (props: Props) => {
  const { t } = props;
  return (
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
        <Link href="/login">
          <NavLink>{t('login')}</NavLink>
        </Link>
        <Link href="/register">
          <NavLink>{t('register')}</NavLink>
        </Link>
      </ContainerLinks>
    </Container>
  );
};

export default withNamespaces('header')(Header);
