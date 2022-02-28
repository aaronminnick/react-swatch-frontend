import React from 'react';
import Header from './Header';
import SwatchControl from './SwatchControl';
import ColorSelectForm from './ColorSelectForm';

function App() {
  return (
    <React.Fragment>
      <Header />
      <SwatchControl />
      <ColorSelectForm />
    </React.Fragment>
  );
}

export default App;