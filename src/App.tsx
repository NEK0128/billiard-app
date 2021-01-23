import React from 'react';
import './App.css';
import GenericTemplate from './components/templates/GenericTemplate';
import TopPageContainer from './containers/TopPageContainer';

const App: React.FC = () => {
  return (
    <GenericTemplate title="ショットクロック">
      <React.Fragment>
        <TopPageContainer/>
      </React.Fragment>
    </GenericTemplate>
  );
}

export default App;
