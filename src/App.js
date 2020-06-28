import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import GlobalStyles from './styles/global';
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Homepage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
