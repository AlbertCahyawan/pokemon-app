import Head from 'next/head'
import Layout from '../components/layout'
import PokemonCard from '../components/pokemonCard'
import { useState, useEffect } from 'react'

export default function MyPokemonList() {
  let [myPokemon, setMyPokemon] = useState({
    total:0,
    list:{}
  })
  let [forceRerender , setforceRerender] = useState(0)
  useEffect(() => {
    const storage = localStorage.getItem('MyPokemon')
    if( storage ){ 
      setMyPokemon( JSON.parse(storage)  )
    }  
  }, []);
  
  function freePokemon(name){
    // I use dialog because it's time consuming to create modal 
    const release = confirm(`Are you sure you want to relese ${name} into the wild?`); 
    if(release){
      let releaseObj = Object.assign(myPokemon)
      if( releaseObj.list.hasOwnProperty( name) ){
        delete releaseObj.list[name]   
        localStorage.setItem('MyPokemon',  JSON.stringify(releaseObj) )   
        setMyPokemon({
          total:myPokemon.total - 1,
          list:releaseObj.list
        }) 
      }
    }
     
  } 

  return (
    <Layout> 
      <Head>
        <title>my Pokemon List</title>
      </Head>
      <div className="personal-pokemon-list">  
        <div className="pokemon-total">Total Owned Pokemon:{myPokemon.total} </div>  
        { Object.keys(myPokemon.list).map((key,i)=>{
            return ( 
              <PokemonCard
                releasePokemon={(name)=>{freePokemon(name)}} 
                remove={true}
                key={i}
                name={key}
                id={myPokemon.list[key].id}
                url={myPokemon.list[key].image}
            />  
            )
          }) 
        }  
         
      </div>
    </Layout>
  )
}
