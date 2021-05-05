import Head from 'next/head'
import styles from '../styles/home.css'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Pokemon List</title>
        <meta name="description" content="Pokemon App" />
        <link rel="icon" href="../assets/icons/pokemonIcon.ico" />
      </Head>
      <nav className="nav">
        <ul className="nav-link-container" >
          <li className="nav-link">Pokemon list</li>
          <li>Pokemon Detail</li>
          <li>My Pokemon List</li>
        </ul>
      </nav>

      <main className='main'>
        <h1 className='title'>
          Pokemon main page
        </h1>

{/* 
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      
       */}
      </main>

      <footer className='footer'>  
          <span  >
            ©&copy; 2018 Albert Cahyawan - All Rights Reserved
          </span> 
      </footer>
    </div>
  )
}
