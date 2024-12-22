import React from 'react';
import './MenuPage.css';

function MenuPage() {
  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <ul>
        <li>Espresso - $3.00</li>
        <li>Cappuccino - $4.50</li>
        <li>Latte - $4.00</li>
        <li>Mocha - $4.50</li>
      </ul>
    </div>
  );
}

export default MenuPage;
