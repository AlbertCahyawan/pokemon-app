// import React from 'react';
// import renderer from 'react-test-renderer';
// import PokemonCard from '../components/pokemonCard';

// test('Link changes the class when hovered', () => {
//   const component = renderer.create(
//     <Link page="http://www.facebook.com">Facebook</Link>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

import * as actions from '../redux/actions/main'
import * as t from '../redux/types' 

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const payload = 'test'
    const expectedAction = {
      type: 'SET_POKE_LIST',
      payload
    }
    expect(actions.setPokeList(payload)).toEqual(expectedAction)
  })
})

// import * as actions from './addTodo' 

// describe('actions', () => {
//   it('should create an action to add a todo', () => {
//     const text = 'Finish docs'
//     const expectedAction = {
//       type: 'ADD_TODO',
//       text
//     }
//     expect(actions.addTodo(text)).toEqual(expectedAction)
//   })
// })