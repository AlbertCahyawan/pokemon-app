import Head from 'next/head'
import Navbar from './navbar'

export default function Layout({children}) {
  return (
    <div className='Layout'>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>     
        <meta name="description" content="Pokemon app"/>

        <meta property="og:description" content="Pokemon app "/>
        <meta property="og:image" content="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"/>
        <meta property="og:url" content="https://albert-cahyawan-pokemon-app.netlify.app/"/>
        <meta property="og:title" content="albert-cahyawan-pokemon-app"/>  

        <meta name="twitter:title" content="Albert Cahyawan website portofolio"/>
        <meta name="twitter:description"  content="Pokemon app"/>
        <meta name="twitter:image" content=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"/>
        <meta property="og:url" content="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="description" content="Pokemon App" />
        <link rel="icon" href="pokemonIcon.ico" />

      </Head>
      <Navbar/>

      <main className='main'>
        {children}
      </main>

      <footer className='footer'>  
          <span>
            &copy; 2018 Albert Cahyawan - All Rights Reserved
          </span> 
      </footer>
    </div>
  )
}
