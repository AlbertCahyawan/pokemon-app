
export default function PokemonCard(props) {
  return ( 
    <div className="pokemon-card-container">
      <div className="pokemon-display">
        <img src={props.url} alt={props.name}/>  
      </div>
      <div className="pokemon-card-description">
        <div className="description-id">
          #{props.id}
        </div>
        <h2 className="description-Name">
          {props.name}
        </h2>
        { props.remove ? 
        <div className="description-button">
          <button onClick={ ()=> props.releasePokemon( props.name) } >Release</button> 
        </div>
        :
        <></>
        }
        
      </div>
    </div>
 
  )
}

PokemonCard.defaultProps = {
  id: 1,
  name: "Bulbasaur",
  url:'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
  remove: false,
}