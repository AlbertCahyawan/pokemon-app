import Link from 'next/link';

export default function Navbar() {
  return (  
    <nav className="nav"> 
      <ul className="nav-link-container" >
        <li className="nav-link"><Link href="/"><a>Pokemon list</a></Link></li>
        <li className="nav-link"><Link href="/pokemon-detail"><a>Pokemon Detail</a></Link></li> 
        <li className="nav-link"><Link href="/my-pokemon-List"><a>My Pokemon List</a></Link></li> 
      </ul>
    </nav>   
  )
}
