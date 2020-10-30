import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import Art from './Art';
import ArtDetails from './ArtDetails';
import Home from './Home';
import strings from '../config/strings';

function App() {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              {strings.danteLivingston}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    {strings.about}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/digital-art" className="nav-link">
                    {strings.digitalArt}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/traditional-art" className="nav-link">
                    {strings.traditionalArt}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main role="main" className="flex-shrink-0">
        <div className="container mt-4">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/digital-art">
              <Art type="digital" />
            </Route>
            <Route path="/traditional-art">
              <Art type="traditional" />
            </Route>
            <Route path="/art-details/:slug">
              <ArtDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
      {strings.footer && (
        <footer className="footer mt-auto py-3 bg-dark text-white text-center">
          {/* TODO: Social icons? */}
          <div className="container"> {strings.footer}</div>
        </footer>
      )}
    </Router>
  );
}

export default App;
