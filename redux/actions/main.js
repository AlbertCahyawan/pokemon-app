import * as t from "../types";

export const setPokeList = (data) => dispatch => {
  dispatch({
    type: t.SET_POKE_LIST,
    payload: data
  });
}
