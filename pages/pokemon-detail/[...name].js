import Head from 'next/head'
import Layout from '../../components/layout'
import { useState, useEffect } from 'react'
import Api from '../api'
import { useRouter } from 'next/router'

let myPokemon ={ 
  total:0,
  list:{}
}
export default function pokemonDetail(props) {
  const [loaded, setLoaded] = useState(false)
  const [pokemonObj, setPokemonObj] = useState({})
  const router = useRouter()
  let ready = router.isReady;

  useEffect(() => { 
    if(ready){
      const name = router.query.name[0] 
      Api.GetPokemonData(name).then(res => {
        setPokemonObj(res)  
        if(!res.error){
          setLoaded(true);
        }   
      })
    } 
  },);

  useEffect(() => { 
    const storage = localStorage.getItem('MyPokemon') 
    if( storage ){
      myPokemon = JSON.parse(storage) 
    } 
     
  }, []);

  function catchPokemon(){
    const capture = Math.floor(Math.random() * 100) 
 
    // if( capture < 50 ){
      namePokemon();
    // }else{
    //   alert('fail to capture')
    // }
  }

  function namePokemon(){
    let end = false;  
    // prompt can be blocked but a faster way to make this prototype
    while (!end ){
      const nickname = prompt('Name Your captured pokemon',pokemonObj.name )
      if( nickname === null && nickname !== '' ){
        alert('pokemon released')
        end = true;
        break;
      }else{
        if(myPokemon.list.hasOwnProperty(nickname)){
          alert(`nickname:${nickname} has been taken `)
        }else{ 
          alert(pokemonObj.name + ' has been named ' + nickname)
          myPokemon.total += 1;
          myPokemon.list[nickname] ={
            id: pokemonObj.id,
            name:pokemonObj.name,
            image: pokemonObj.sprites.front_default,
          } 
          localStorage.setItem('MyPokemon',  JSON.stringify(myPokemon) )  
          
          end = true;   
          break; 
         
        }
        
      }
    }

    
  } 


  return (
    <Layout>
      <Head>
        <title>Pokemon Detail</title>
      </Head>
      <div className="pokemon-detail">
        
        {loaded ?
          <>
          {/* I want to add next and prev val but the url does not provide with next value name or id so it hard to refetch it  */}
            {/* <div className="pokemon-direction">
              <div className="previous">Prev</div>
              <div className="next">Next</div> 
            </div> */}
            <div className="pokemon-detail-container">
              <div className="pokemon-stats">
                <div className="pokemon-profile-img">
                  <img src={pokemonObj.sprites.front_default} />
                </div>
                <h1 className="pokemon-name" >{pokemonObj.name} <span>#{pokemonObj.id}</span></h1>
                <div className="catch-pokemon">
                  <button onClick={()=>{catchPokemon()}} >Catch Pokemon</button>
                </div>
                <div className="pokemon-type">
                  <h3>Type</h3>
                  <div className="pokemon-type-list" >
                    {pokemonObj.types.map((type, id) =>
                      <span key={id}>{type.type.name}</span>
                    )}
                  </div>
                </div>

              </div>
              <div className="pokemon-data">
                <div className="pokemon-info">
                  <h2>Moves</h2>
                  {pokemonObj.moves.map((move, id) =>
                    <div className="info-description" key={id}>
                      <h3 className="info-title">{move.move.name}</h3>
                      {/* <div className="info-detail">2' 04"</div> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="pokemon-evolution-tree">

            </div>
          </>
          : <span> loading...</span>

        }

      </div>
    </Layout>
  )
}

pokemonDetail.defaultProps = {
  name: 'bulbasaur'
}