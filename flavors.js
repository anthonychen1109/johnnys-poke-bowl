import React from 'react';

const Flavors = () => {

  const flavors = [
    {name:'Classic Sauce', image:'classicsauce.jpg'},
    {name:'Eel Sauce', image:'eelsauce.jpg'},
    {name:'Extra Spicy Mayo', image:'extraspicymayo.jpg'},
    {name:'House Sauce', image:'housesauce.jpg'},
    {name:'Mango Sauce', image:'mangosauce.jpg'},
    {name:'Ponzu Sauce', image:'ponzusauce.jpg'},
    {name:'Spicy Mayo', image:'spicymayo.jpg'},
    {name:'Sriracha Hot Sauce', image:'srirachahotsauce.jpg'},
    {name:'Strawberry Sauce', image:'strawberrysauce.jpg'},
    {name:'Sweet Mayo', image:'sweetmayo.jpg'},
    {name:'Yum Yum Sauce', image:'yumyumsauce.jpg'}
  ];

  const flavors_list = flavors.map(flavor => (
    <div className="flavor_card" key={flavor.name}>
      <img src={require(`../assets/images/accessory_image/flavor/${flavor.image}`)} alt={flavor.name} />
      <p>{flavor.name}</p>
    </div>
  ))

  return (
    <div className="poke_flavors">
      <div className="flavors">
        <p>4. Choose a <strong>FLAVOR</strong></p>
      </div>
      <div className="flavors_list">
        {flavors_list}
      </div>
    </div>
  )
}

export default Flavors;
