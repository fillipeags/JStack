import React from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/Arrow.svg';
import trash from '../../assets/images/icons/TrashCan.svg';
import edit from '../../assets/images/icons/Edit.svg';

import {
  InputSearchContainer, Container, Header, ListContainer, Card,
} from './styles';
// import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      {/* <Modal danger title="teste" subtitle="teste teste" /> */}
      {/* <Loader /> */}

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow indicating sort order" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>Instagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-99999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
