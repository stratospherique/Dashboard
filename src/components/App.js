import React from 'react';
import { MainContainer } from './styled/containers';
import Header from './header';


const App = () => {
  return (
    <MainContainer>
      <Header />
      <h1>Heelo dashboard</h1>
    </MainContainer>
  );
}


export default App;