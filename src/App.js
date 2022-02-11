import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';

function App() {
  return (
    <>
      <Header />
      <main className="py-4">
        <Container>
          <HomeScreen />
        </Container>
      </main>
    </>
  );
}

export default App;
