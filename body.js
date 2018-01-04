import React from 'react';

//COMPONENT
import PokeBase from './poke_base';
import Proteins from './proteins';
import Mixins from './mixins';
import Flavors from './flavors';

const Body = () => {
  return (
    <div className="body container">
      <h1>Build Your Own Poke</h1>
      <PokeBase />
      <hr />
      <Proteins />
      <hr />
      <Mixins />
      <hr />
      <Flavors />
      <hr />
    </div>
  )
}

export default Body;
