import React from 'react';

import NavBar from '../../components/NavBar';
import MainCard from '../../components/MainCard';
import Card from '../../components/Card';
import { Container, BottomContent } from './styles';

function Homepage() {
  return (
    <Container>
      <header>
        <div className='logo-title'>
          <h1>MEU APP</h1>
        </div>
        <NavBar />
      </header>

      <section className='sc-main'>
        <MainCard />
        <BottomContent>
          <Card />
          <Card />
        </BottomContent>
      </section>
    </Container>
  );
}

export default Homepage;
