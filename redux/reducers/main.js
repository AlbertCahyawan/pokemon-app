import * as t from "../types";

const main = (state = {
    data: {},
    offset: 0,
    limit: 12,
    firstLoad:false,
}, action) => {
  switch(action.type){
    case t.SET_POKE_LIST:
      return { 
        ...state,
        data: action.payload,
        offset: state.offset + state.limit ,
        firstLoad: true
      };
    default:
      return {...state};
    }
}

export default main;