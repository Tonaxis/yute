import React from 'react'
import { Home, Info } from 'lucide-react';
import Link from './Link';

export default function NavBar() {
  return (
    <div className="nav-bar">
        <img src="squirrel.webp" alt="logo" width={60} height={60} />
        <nav className="nav-bar__links">
          <Link className="nav-bar__links__link" to="/"><span className="nav-bar__links__link--text">Accueil</span> <Home className="nav-bar__links__link--icon" size={48} /></Link>
          <Link className="nav-bar__links__link" to="/about"><span className="nav-bar__links__link--text">A Propos</span> <Info className="nav-bar__links__link--icon" size={48} /></Link>
          <Link className="nav-bar__links__link nav-bar__links__link--search" to="/">Recherche</Link>
        </nav>
        {/* <input className="nav-bar__search-bar" type="text">Recherche</input> */}
      </div>
  )
}
