import React, { Component } from 'react';
import configureAmplify from '../../config/amplifyConfig';
import MainContainer from './MainContainer';
import ChatWindowContainer from '../../containers/ChatWindowContainer';

class App extends Component {
  componentWillMount() {
    configureAmplify(
      'us-east-1:3b480e3c-4ddf-4835-ae47-6c7220c7415c',
      'us-east-1',
      'AmplelabsBot',
      '$LATEST'
    );
  }

  render() {
    return (
      <MainContainer>
        <ChatWindowContainer />
      </MainContainer>
    );
  }
}

export default App;
