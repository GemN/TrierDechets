import Link from 'next/link';
import { withNamespaces } from '../../../i18n';
import { Container, NavLink } from './style';

type Props = {
  t: Function,
};

const Header = (props: Props) => {
  const { t } = props;
  return (
    <Container>
      <Link href="/">
        <NavLink>{t('home')}</NavLink>
      </Link>
      <Link href="/browse">
        <NavLink>{t('browse')}</NavLink>
      </Link>
      <Link href="/login">
        <NavLink>{t('login')}</NavLink>
      </Link>
      <Link href="/register">
        <NavLink>{t('register')}</NavLink>
      </Link>
    </Container>
  );
};

export default withNamespaces('header')(Header);
