import React from 'react';

const Crunch = () => {

  const crunches = [
    {name:'Crispy Noodle', image:'Crispynoodles.jpg'},
    {name:'Crunch', image:'crunch.jpg'}
  ];

  const crunches_list = crunches.map(crunch => (
    <div className="crunch_card" key={crunch.name}>
      <img src={require(`../assets/images/accessory_image/crunch/${crunch.image}`)} alt={crunch.name} />
      <p>{crunch.name}</p>
    </div>
  ))

  return (
    <div className="poke_crunches">
      <div className="crunches">
        <p>6. Choose <strong>CRUNCH</strong></p>
      </div>
      <div className="proteins_list">
        {crunches_list}
      </div>
    </div>
  )
}

export default Crunch;
