import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from './Link';
import NavBar from './NavBar';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <>
      <NavBar />
      <div className="layout">
          <div className={`layout__part layout__part--left-sidebar ${isSidebarOpen ? 'active' : ''}`} >
              <h3>Pages</h3>
              <nav className="layout__part--left-sidebar__links">
                <Link className="layout__part--left-sidebar__links__link" to="/tuffigo"> Hélène Tuffigo</Link>
                <Link className="layout__part--left-sidebar__links__link" to="/merciol">François Merciol</Link>
                <Link className="layout__part--left-sidebar__links__link" to="/kamp">Jean François Kamp</Link>
                <Link className="layout__part--left-sidebar__links__link" to="/pham">Minh Tan Pham</Link>
                <Link className="layout__part--left-sidebar__links__link" to="/godin">Thibault Godin</Link>
                <Link className="layout__part--left-sidebar__links__link" to="/kerbellec">Goulven Kerbellec</Link>
                <Link className="layout__part--left-sidebar__links__link" to="/roirand">Xavier Roirand</Link>
                <Link className="layout__part--left-sidebar__links__link" to="/tonin">Philipe Tonin</Link>
                <Link className="layout__part--left-sidebar__links__link" to="/ferragut">Tom Ferragut</Link>
                <Link className="layout__part--left-sidebar__links__link" to="/belmouhcine">Abdelbadi Belmouhcine</Link>
              </nav>
              <button className="layout__part layout__part--left-sidebar__button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <span><ChevronLeft /></span>
              </button>
          </div>
          <div className="layout__part layout__part--content">
            {children}
          </div>
          <div className="layout__part layout__part--right-sidebar">
          </div>
      </div>
    </>
  );
};
