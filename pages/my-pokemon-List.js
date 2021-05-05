import Head from 'next/head'
import Layout from '../components/layout'
import PokemonCard from '../components/pokemonCard'

export default function MyPokemonList() {
  return (
    <Layout> 
      <Head>
        <title>my Pokemon List</title>
      </Head>
      <div className="personal-pokemon-list">
        <PokemonCard/>  
      </div>
    </Layout>
  )
}
