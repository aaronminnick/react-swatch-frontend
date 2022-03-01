import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import SwatchControl from './SwatchControl';
import ColorSelectForm from './ColorSelectForm';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <SwatchControl />
        <ColorSelectForm />
      </Container>
    </React.Fragment>
  );
}

export default App;