 NavigationMenu.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavigationMenu() {
  const navigate = useNavigate(); 


  const handleNavigate = (to) => {
    navigate(to);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button onClick={() => handleNavigate('/contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;