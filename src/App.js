import React from 'react';
import './App.css';

import styled from 'styled-components'

import ThingOne from './thing_one'
import Container from './container'

const StyledApp = styled.div`
   position: relative;
   height: 100vh;
   width: 100%;
`

function App() {
  return (
    <StyledApp data-testid="app" className="App" style={{position: 'relative'}}>
      <Container />
    </StyledApp>
  );
}

export default App;
