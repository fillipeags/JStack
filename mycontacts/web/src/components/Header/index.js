import React from 'react';

import logo from '../../assets/images/Logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="My Contacts logo" width={201} />
    </Container>
  );
}
