import Head from 'next/head'
import Navbar from './navbar'
// import icon from '../assets/icons/pokemonIcon.png'

export default function Layout({children}) {
  return (
    <div className='Layout'>
      <Head>
        <meta name="description" content="Pokemon App" />
        <link rel="icon" href="../assets/icons/pokemonIcon.png" />
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
