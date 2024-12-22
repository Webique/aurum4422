import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <ul>
        <li>Espresso - $3.00</li>
        <li>Cappuccino - $4.50</li>
        <li>Latte - $4.00</li>
        <li>Mocha - $4.50</li>
      </ul>
    </section>
  );
}

export default Menu;
