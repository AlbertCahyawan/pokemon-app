import Head from 'next/head'
import Layout from '../components/layout'
export default function pokemonDetail() {
    return (
      <Layout> 
        <Head>
          <title>Pokemon Detail</title>
        </Head>
        <div className="pokemon-detail"> 
          <div className="pokemon-direction">
            <div className="previous">Prev <span className="direction-id">#898</span><span>Calyrex</span> </div>
            <div className="next"><span>IvySaur</span><span className="direction-id">#002</span> Next</div>
          </div>
          <h1 className="pokemon-name" >Bulbasaur <span>#001</span></h1> 
          <div className="catch-pokemon">
            <button >Catch Pokemon</button>
          </div>
          <div className="pokemon-detail-container">
            <div className="pokemon-stats">
              <div className="pokemon-profile-img">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
              </div>
              <div className="pokemon-profile">
                <h3 className="profile-title">Stats</h3>
                <div className="profile-stats">
                    <span>HP:</span> 3
                </div>
                <div className="profile-stats">
                    <span>Attack:</span> 3
                </div>
                <div className="profile-stats">
                    <span>Defense:</span> 3
                </div>
                <div className="profile-stats">
                    <span>Special attack:</span> 3
                </div>
              </div>
            </div>
            <div className="pokemon-data">
              <div className="pokemon-description">
                There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger. 
              </div>
              <div className="pokemon-info">
                <div className="info-description">
                  <h4 className="info-title">Height</h4>
                  <div className="info-detail">2' 04"</div>
                </div> 

              </div>
              <div className="pokemon-type">
                <h3>Type</h3>
                <div className="pokemon-type-list"><span>Grass</span> </div>
              </div>
              <div className="pokemon-type">
                <h3>Weakness</h3>
                <div className="pokemon-type-list"><span>Grass</span> </div>
              </div>
            </div>
          </div>
          <div className="pokemon-evolution-tree">

          </div>
        </div>
    </Layout>
    )
  }