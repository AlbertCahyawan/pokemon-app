import Head from 'next/head';
import Layout from '../components/layout';
import PokemonCard from '../components/pokemonCard';
import {useState,useEffect} from 'react';
import Api from './api'
import { useRouter } from 'next/router'

export default function PokemonList() {
  let [pokemonList,setPokemonList] = useState({}); 
  let [startoffset,setoffset] = useState(0) 
  let [load,setLoad] = useState(true) 
  let [reachend,setReachend] = useState(false)  
  let [myPokemon, setMyPokemon] = useState({
    total:0,
    list:{}
  })

  const limit = 12;
  const router = useRouter()

  useEffect(() => {
    // Your code here
    fetchPokemonList()
    const storage = localStorage.getItem('MyPokemon') 
    if( storage ){
      setMyPokemon(JSON.parse(storage) ) 
    } 

  }, []);
  function fetchPokemonList (){ 
    Api.getPokemonList(limit,startoffset).then(res => setPokemon(res) 
    )   
  }  
  
  
  function setPokemon(data){ 
    const newData = data.results  
    const pokemonObj =  newData.reduce((acc,info )=>( acc[info.id] = info ,acc) ,{})
    setPokemonList(  Object.assign(pokemonObj, pokemonList) ) 
    if( data.next !== null ){ 
      setoffset(startoffset + limit )
    }else{
      setReachend(true); 
    } 
    setLoad(false);
  }

  function selectPokemon(pokemon){
    router.push('/pokemon-detail/'+pokemon.name)
  }

  return (
    <Layout> 
      <Head>
        <title>Pokemon list</title>
        <link rel="icon" href="../assets/icons/pokemonIcon.png" />
      </Head>
      <div className="pokemon-list"> 
        <div className="pokemon-total">Total Owned Pokemon:{myPokemon.total} </div> 
        { Object.keys(pokemonList).map((id) =>  
          <div 
          key={id}
          className="pokemon-click-wrapper"
          onClick={()=>selectPokemon(pokemonList[id]) }>
              <PokemonCard 
              id={id}
              url={pokemonList[id].image}
              name={pokemonList[id].name}
            />
          </div> 
        )}
       
        <div className="pokemon-load">
          { load ?
            <span>loading...</span>
            :
            reachend ? <></> :
            <button onClick={()=>{fetchPokemonList()}}>
              load button
            </button>
          }
         
        </div>
      </div>
    </Layout>
  )
}
