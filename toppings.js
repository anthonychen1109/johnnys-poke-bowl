import React from 'react';

const Toppings = () => {

  const toppings = [
    {name:'Avocado', image:'avocado.jpg'},
    {name:'Crab Stick', image:'crabstick.jpg'},
    {name:'Fish Roe', image:'fishroe.jpg'},
    {name:'Furikake', image:'furikake.jpg'},
    {name:'Seaweed Salad', image:'seaweedsalad.jpg'},
    {name:'Sesame', image:'sesame.jpg'},
    {name:'Squid Salad', image:'squidsalad.jpg'},
    {name:'Wasabi', image:'wasabi.jpg'},
  ];

  const toppings_list = toppings.map(topping => (
    <div className="topping_card" key={topping.name}>
      <img src={require(`../assets/images/accessory_image/toppings/${topping.image}`)} alt={topping.name} />
      <p>{topping.name}</p>
    </div>
  ))

  return (
    <div className="poke_toppings">
      <div className="toppings">
        <p>5. Add <strong>TOPPINGS</strong></p>
      </div>
      <div className="toppings_list">
        {toppings_list}
      </div>
    </div>
  )
}

export default Toppings;
