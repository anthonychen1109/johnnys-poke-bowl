import React from 'react';

const Mixins = () => {

  const mixins = [
    {name:'Cilantro', image:'cliantro.jpg'},
    {name:'Coconut Flakes', image:'coconutflake.jpg'},
    {name:'Cucumber', image:'cucumber.jpg'},
    {name:'Edamame', image:'edamame.jpg'},
    {name:'Jalapeno', image:'Jalapeno.jpg'},
    {name:'Lettuce', image:'lettuce.jpg'},
    {name:'Mango', image:'mango.jpg'},
    {name:'Pickled Radish', image:'pickleradish.jpg'},
    {name:'Scallion', image:'scallion.jpg'},
    {name:'Spinach', image:'spinach.jpg'},
    {name:'Sweet Onion', image:'sweet onion.jpg'},
    {name:'Sweet Corn', image:'sweetcorn.jpg'},
    {name:'White Radish', image:'whiteradish.jpg'}
  ];

  const mixins_list = mixins.map(mixin => (
    <div className="mixin_card" key={mixin.name}>
      <img src={require(`../assets/images/accessory_image/mixins/${mixin.image}`)} alt={mixin.name} />
      <p>{mixin.name}</p>
    </div>
  ))

  return (
    <div className="poke_mixins">
      <div className="mixins">
        <p>3. Add <strong>MIX-INS</strong></p>
      </div>
      <div className="mixins_list">
        {mixins_list}
      </div>
    </div>
  )
}

export default Mixins;
