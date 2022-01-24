import React from 'react';

import logo from '../../assets/images/Logo.svg';

import { Container, InputSearchContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="My Contacts logo" width={201} />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
    </Container>
  );
}
