import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENT
import Home from './home';

const Routes = () => {
  return (
    <BrowserRouter >
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  )
}

export default Routes
