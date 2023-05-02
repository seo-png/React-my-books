import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Add from './pages/Add';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/edit/:id" element={ <Edit /> }/>
      <Route path="/book/:id" element={ <Detail /> }/>

      <Route path="/add" element={ <Add /> }/>

      <Route path="/signin" element={ <Signin /> }/>
      <Route path="/" element={ <Home /> }/>
      <Route element={ <NotFound /> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
