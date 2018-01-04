import React from 'react';

const Proteins = () => {

  const proteins = [
    {name:'Ahi Tuna', image: 'ahituna.jpg'},
    {name:'Eel', image: 'eel.jpg'},
    {name:'Octopus', image: 'octopus.jpg'},
    {name:'Salmon', image: 'salmon.jpg'},
    {name:'Shrimp', image: 'shrimp.jpg'},
    {name:'Spicy Crab Meat', image: 'spicycrabmeat.jpg'},
    {name:'Spicy Real Crab Meat', image: 'spicyrealcrabmeat.jpg'},
    {name:'Spicy Salmon', image: 'spicysalmon.jpg'},
    {name:'Spicy Shrimp', image: 'spicyshrimp.jpg'},
    {name:'Spicy Tuna', image: 'spicytuna.jpg'},
    {name:'Spicy Yellow Tail', image: 'spicyyellowtail.jpg'},
    {name:'Spicy Octopus', image: 'spicyoctopus.jpg'},
    {name:'Yellow Tail', image: 'yellowtail.jpg'}
  ];

  const proteins_list = proteins.map(protein => (
    <div className="protein_card" key={protein.name}>
      <img src={require(`../assets/images/accessory_image/protein/${protein.image}`)} alt={protein.name} />
      <p>{protein.name}</p>
    </div>
  ))

  return (
    <div className="poke_proteins">
      <div className="proteins">
        <p>2. Pick your <strong>PROTEIN</strong></p>
      </div>
      <div className="proteins_list">
        {proteins_list}
      </div>
    </div>
  )
}

export default Proteins;
