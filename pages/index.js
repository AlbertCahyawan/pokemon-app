import Head from 'next/head'
import Layout from '../components/layout'
import PokemonCard from '../components/pokemonCard'
import {useState,useEffect} from 'react'
// import { Spinner  } from 'react-bootstrap';

export default function PokemonList() {
  let [pokemonList,setPokemonList] = useState({}); 
  let [startoffset,setoffset] = useState(0) 
  let reachend = false;
  const limit = 12;
  useEffect(() => {
    // Your code here
    getPokemonList()
  }, []);
  function getPokemonList(){
    const offset = startoffset
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
          url
          name
          image
          id
        }
      }
    }`;
  
    const gqlVariables = {
      limit,
      offset:startoffset,
    };
  
    fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: gqlQuery,
        variables: gqlVariables,
      }),
      method: 'POST',
    }) 
      .then((res) => res.json() )
      .then((res) =>
        setPokemon(res),
      )
      .catch(console.error);
  }
  function setPokemon(data){ 
    const newData = data.data.pokemons.results  
    let pokemonObj = {}
    for(let key in newData){
      const val = newData[key] 
      pokemonObj[val.id] = val 
    }
    setPokemonList(  Object.assign(pokemonObj, pokemonList) ) 
    if( data.data.pokemons.next !== null ){ 
      setoffset(startoffset + limit )
    }else{
      reachend = true
    } 
  }
  return (
    <Layout> 
      <Head>
        <title>Pokemon list</title>
        <link rel="icon" href="../assets/icons/pokemonIcon.png" />
      </Head>
      <div className="pokemon-list"> 
        { Object.keys(pokemonList).map((id) =>  
           <PokemonCard key={id}
           id={id}
           url={pokemonList[id].image}
           name={pokemonList[id].name}
         /> 
        )}
       
        <div className="pokemon-load">
          {/* <Spinner animation="border" /> */}
          <button onClick={()=>{getPokemonList()}}>
            load button
          </button>
        </div>
      </div>
    </Layout>
  )
}
