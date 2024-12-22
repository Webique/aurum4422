import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Coffee Shop</h1>
      <p>Your cozy corner for the best coffee and pastries.</p>
      <Link to="/menu">
        <button className="menu-button">View Our Menu</button>
      </Link>
    </div>
  );
}

export default Home;
