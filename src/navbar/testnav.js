import React, { useState } from 'react';
import './App.css';

function App() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubMenu = (menuName) => {
    setOpenMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  const closeAllMenus = () => {
    setOpenMenu(null);
  };

  const navItems = [
    { name: 'Operation', subItems: ['Operation 1', 'Operation 2'] },
    // Add more navItems here
  ];

  return (
    <div className="nav">
      {navItems.map((navItem) => (
        <div
          key={navItem.name}
          className="nav-item"
          onClick={() => toggleSubMenu(navItem.name)}
        >
          {navItem.name}
        </div>
      ))}

      {navItems.map((navItem) => (
        <div
          key={navItem.name + '-submenu'}
          className={`sub-menu ${openMenu === navItem.name ? 'active' : ''}`}
        >
          {navItem.subItems.map((subItem) => (
            <div key={subItem} className="sub-menu-item">
              {subItem}
            </div>
          ))}
        </div>
      ))}

      <div className="overlay" onClick={closeAllMenus}></div>
    </div>
  );
}

export default App;
