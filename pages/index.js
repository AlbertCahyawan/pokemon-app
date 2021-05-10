import Head from 'next/head';
import Layout from '../components/layout';
import PokemonCard from '../components/pokemonCard';
import {useState,useEffect} from 'react';
import Api from './api'
import { useRouter } from 'next/router'
import { connect } from "react-redux"
import { setPokeList } from "../redux/actions/main"
import Image from 'next/image'

function PokemonList(props) {
  const { pokeData, setPokeList,offset,limit, firstLoad} = props;

  let [load,setLoad] = useState(true) 
  let [reachend,setReachend] = useState(false)  
  let [myPokemon, setMyPokemon] = useState({
    total:0,
    list:{}
  })

  const router = useRouter()

  useEffect(() => {
    // Your code here
    if(!firstLoad){
      fetchPokemonList()
    }else{
      setLoad(false)
    }
    const storage = localStorage.getItem('MyPokemon') 
    if( storage ){
      setMyPokemon(JSON.parse(storage) ) 
    } 
    

  }, []);
  function fetchPokemonList (){ 
    Api.getPokemonList(limit,offset).then(
      res => setPokemon(res) 
    )   
  }  
  
  function setPokemon(data){ 
    const newData = data.results
    const pokemonObj =  newData.reduce((acc,info )=>( acc[info.id] = info ,acc) ,{})
    setPokeList ( Object.assign(pokemonObj, pokeData) );

    if( data.next === null ){ 
      // setoffset(startoffset + limit ) 
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

      </Head>
      <div className="pokemon-list"> 
        <div className="pokemon-total">Total Owned Pokemon:{myPokemon.total} </div>  
        { Object.keys(pokeData).map((id) =>  
          <div 
          key={id}
          className="pokemon-click-wrapper"
          onClick={()=>selectPokemon(pokeData[id]) }>
              <PokemonCard 
              id={id}
              url={pokeData[id].image}
              name={pokeData[id].name}
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

const mapStateToProps = state => {
  return { 
    pokeData: state.main.data,
    offset: state.main.offset,
    limit: state.main.limit, 
    firstLoad: state.main.firstLoad,
  }
 }
 
 const mapDispatchToProps = {
  setPokeList
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)