
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
        <div className="description-types">
          <span className="types-pill">
            Grass
          </span> 
        </div>
      </div>
    </div>
 
  )
}
