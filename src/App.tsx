import React from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import { ErrorBoundary } from 'react-error-boundary';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

function App() {
  return (
  <ErrorBoundary FallbackComponent={Error}>
    <ConnectedRouter history={history}>
      <Router>
        <Routes>
          <Route path="/edit/:id" element={ <Edit /> }/>
          <Route path="/book/:id" element={ <Detail /> }/>

          <Route path="/add" element={ <Add /> }/>

          <Route path="/signin" element={ <Signin /> }/>
          <Route path="/" element={ <Home /> }/>
          <Route path="/*" element={ <NotFound /> }/>
        </Routes>
      </Router>
    
  </ConnectedRouter>
  </ErrorBoundary>
  
  );
}

export default App;
