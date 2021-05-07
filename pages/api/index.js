import { gql, } from '@apollo/client';
import client from "../../apolo-client";

const api = { getPokemonList,GetPokemonData }
async function getPokemonList(limit, offset) {
    const gqlQuery = gql`
        query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
              name
              image
              id
            }
        }
        }
    `;

    const gqlVariables = {
        limit,
        offset,
    };

    let data = {}
    try {
      data = await client.query({
          query: gqlQuery,
          variables: gqlVariables
      })
    } catch (error) { 
      return {error}
    }
 
    return data.data.pokemons 
}
async function GetPokemonData(name) {
    const gqlQuery = gql`
      query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        sprites {
          front_default
        }
        moves {
          move {
            name
          }
        }
        types {
          type {
            name
          }
        }
      }
    }`;

    const gqlVariables = {
        name,
    };
    let data = {}
    try {
      data = await client.query({
          query: gqlQuery,
          variables: gqlVariables
      })
    } catch (error) { 
      return {error}
    }
 
    return data.data.pokemon
}

export default api