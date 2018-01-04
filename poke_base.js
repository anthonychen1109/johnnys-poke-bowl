import React from 'react';

const PokeBase = () => {

  const basis = [
    {name:'Brown Rice', image:'brownrice.jpg'},
    {name:'Lettuce Rice', image:'lettucerice.jpg'},
    {name:'Sushi Rice', image:'sushirice.jpg'}
  ];

  const base_list = basis.map(base => (
    <div className="base_card" key={base.name}>
      <img src={require(`../assets/images/accessory_image/base/${base.image}`)} alt={base.name} />
      <p>{base.name}</p>
    </div>
  ))
  
  return (
    <div className="poke_base">
      <div className="base">
        <p>1. Choose a <strong>BASE</strong></p>
      </div>
      <div className="base_list">
        {base_list}
      </div>
    </div>
  )
}

export default PokeBase;
