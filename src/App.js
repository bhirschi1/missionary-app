import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import CustomPage from './Custom_Page';
import OtherPage from './Other_Page';

function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/custom-page">Custom Page</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/other-page">Other Page</Link>
    </li>
  </ul>
</nav>


        <Routes>
          <Route path="/custom-page" element={<CustomPage />} />
          <Route path="/other-page" element={<OtherPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
