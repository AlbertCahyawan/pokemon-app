import React from 'react';
import renderer from 'react-test-renderer';
import PokemonCard from '../components/pokemonCard';

test('check snapshot on default', () => {
  const component = renderer.create(
    <PokemonCard />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); 
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('snapshot when there is new changes', () => {
  const data = {
    name: "bulbasaur",
    remove: true ,
    id: 1,
    image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' 
  }
  const component = renderer.create(
    <PokemonCard  
      remove={data.remove} 
      name={data.name}
      id={data.id}
      url={data.image}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); 
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
 