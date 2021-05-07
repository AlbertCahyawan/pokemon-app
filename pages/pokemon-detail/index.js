import Head from 'next/head'
import Layout from '../../components/layout' 
import { useRouter } from 'next/router'
import {useEffect} from 'react';

export default function pokemonDetail() {
  const router = useRouter()
  useEffect(() => {
    // Your code here
    router.push('/pokemon-detail/bulbasaur')

  }, []); 
  return (
    <Layout>
      <Head>
        <title>Pokemon Detail</title>
      </Head>
      <div className="pokemon-detail"> 
        Loading...
      </div>
    </Layout>
  )
}

pokemonDetail.defaultProps = {
  name: 'bulbasaur'
}