import React from 'react';

const Menu = () => {

  const menus = [
    {name:'Dragon Bowl' , image: 'dragon_bowl.jpg'},
    {name:'Eel Bowl' , image: 'eel_bowl.jpg'},
    {name:'Garden Bowl' , image: 'garden_bowl.jpg'},
    {name:'Hawaiian Classic' , image: 'hawaiian_classic.jpg'},
    {name:"Johnny's Classic Bowl" , image: "johnny's_classic_bowl.jpg"},
    {name:'Salmon Lover Bowl' , image: 'salmon_lover_bowl.jpg'},
    {name:'Spicy Bowl' , image: 'spicy_bowl.jpg'},
    {name:'Spicy House Bowl' , image: 'spicy_house_bowl.jpg'}
  ];

  const menus_list = menus.map(menu => (
    <div className="menu_card" key={menu.name}>
      <img src={require(`../assets/gallery/dish_image/${menu.image}`)} alt={menu.name} />
      <p>{menu.name}</p>
    </div>
  ))

  return (
    <div className="poke_menus">
      <div className="menus">
        <h1><strong>OUR MENU</strong></h1>
        <h1>Signature Poke Bowls</h1>
      </div>
      <div className="menus_list">
        {menus_list}
      </div>
    </div>
  )
}

export default Menu;
