import React from 'react';
import styled from 'styled-components';
import { rem } from './helpers/helpers';
import './App.css';
import Timer from './containers/Timer/Timer';

import AppBar from '@material-ui/core/AppBar';

const Title = styled.h1`
  font-size: ${rem(24)};
  text-align: center;
`;

const App = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Title>Check your time</Title>
      </AppBar>
      <Timer />
    </React.Fragment>
  );
}

export default App;
