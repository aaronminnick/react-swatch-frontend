import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import SwatchControl from './SwatchControl';
import ColorSelectForm from './ColorSelectForm';

function App() {
  return (
    <React.Fragment>
      <Container>
      <div className="justify-center">
        <Header />
      </div>
      <div className="justify-center">
        <SwatchControl />
      </div>
      <div className="justify-center">
        <ColorSelectForm />
      </div>
      </Container>
    </React.Fragment>
  );
}

export default App;