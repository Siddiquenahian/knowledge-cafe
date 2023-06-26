import React from 'react';
import './Header.css';
import img from '../../images/profile.png';

const Header = () => {
    return (
      <nav className="header">
        <div>
          <h2>Knowledge Cafe</h2>
        </div>
        <img src={img} alt="" />
      </nav>
    );
};

export default Header;