import React from 'react';

//COMPONENT
import Header from './header';
import Menu from './menu';
import PokeBase from './poke_base';
import Proteins from './proteins';
import Mixins from './mixins';
import Flavors from './flavors';
import Toppings from './toppings';
import Crunch from './crunch';

const Body = () => {
  return (
    <div className="body container">
      <Header />
      <Menu />
      <hr />
      <h1>Build Your Own Poke</h1>
      <PokeBase />
      <hr />
      <Proteins />
      <hr />
      <Mixins />
      <hr />
      <Flavors />
      <hr />
      <Toppings />
      <hr />
      <Crunch />
      <hr />
    </div>
  )
}

export default Body;
