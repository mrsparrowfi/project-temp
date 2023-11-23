import React, { useState, useEffect } from 'react';
import "./navtest.css";

const NavMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { label: 'Item 1', hasSubMenu: true },
    { label: 'Item 2', hasSubMenu: false },
    { label: 'Item 3', hasSubMenu: true },
    // Add more menu items here
  ];

  const subMenuItems = [
    { label: 'Sub Item 1' },
    { label: 'Sub Item 2' },
    { label: 'Sub Item 3' },
    // Add more submenu items here
  ];

  const handleMenuItemClick = (index) => {
    if (menuItems[index].hasSubMenu) {
      if (activeMenu === index) {
        setActiveMenu(null);
      } else {
        setActiveMenu(index);
      }
    }
  };

  const handleSubMenuItemClick = (subIndex) => {
    // Perform action for submenu item click
    console.log('Submenu item clicked:', subMenuItems[subIndex].label);
    setActiveMenu(null);
  };

  const handleBodyClick = (event) => {
    if (!event.target.closest('.submenu')) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <div className="nav-menu">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleMenuItemClick(index)}
            className={activeMenu === index ? 'active' : ''}
          >
            {item.label}
            {item.hasSubMenu && activeMenu === index && (
              <ul className="submenu">
                {subMenuItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => handleSubMenuItemClick(subIndex)}
                  >
                    {subItem.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
