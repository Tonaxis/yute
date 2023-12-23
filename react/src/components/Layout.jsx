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
              <h3>Menu</h3>
              <nav className="layout__part--left-sidebar__links">
                <Link className="layout__part--left-sidebar__links__link" to="/test">Test</Link>
                <Link className="layout__part--left-sidebar__links__link" to="/test">Testssss</Link>
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
