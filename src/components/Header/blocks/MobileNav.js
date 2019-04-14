import React from 'react';
import Link from 'next/link';
import {
  Mask,
  MobileBurger,
  MobileMenu,
  MobileNavLink,
} from './MobileNav.style';
import { withNamespaces } from '../../../../i18n';

type Props = {
  t: Function,
  onClose: Function,
};

const stopPropagation = e => e.stopPropagation();

const MobileNav = (props: Props) => {
  const { t } = props;

  return (
    <Mask onClick={props.onClose}>
      <MobileMenu onClick={stopPropagation}>
        <MobileBurger onClick={props.onClose}>
          <i className="fas fa-times" />
        </MobileBurger>
        <Link href="/browse">
          <MobileNavLink>{t('browse')}</MobileNavLink>
        </Link>
        <Link href="/login">
          <MobileNavLink>{t('login')}</MobileNavLink>
        </Link>
        <Link href="/register">
          <MobileNavLink>{t('register')}</MobileNavLink>
        </Link>
      </MobileMenu>
    </Mask>
  );
};

export default withNamespaces('header')(MobileNav);
