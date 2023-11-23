import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { navItems } from "../data/data";

import "./navbar.css";
import logo from "../assets/images/logo/oriyo.png";


function NavBar () {

    return (
        <nav>
            <ul className="nav--container" id="nav--container">
                <Logo />
                <NavMenuItems />
            </ul>
        </nav>
    );

}

function Logo () {

    return (
        <>
            <li className="flex--space"></li>
            <li className="flex--space"></li>
            <li className="flex--space"></li>
            <li className="logo--img" id="logo--img">
                <Link to="/">
                    <img src={ logo } alt="logo--img" />
                    {/* <span> Radius </span> */}
                    <div className="logo--wrapper">
                        <svg width="15rem" height="2.5rem">
                            <text x="40%" y="100%" dy="-0.25em" textAnchor="middle">
                                Oriyostyles
                            </text>
                        </svg>
                    </div>
                </Link>
            </li>
            <li className="flex--space"></li>
        </>
    );

}

const NavMenuItems = () => {

    return (
        <>
            {
                navItems.map((menu, index) => {
                    const depthLevel = 0;

                    return (
                        <MenuItems
                            items={menu}
                            key={index}
                            depthLevel={depthLevel}
                        />
                    );
                })
            }

            <li className="flex--space"></li>
            <li className="flex--space"></li>
            <li className="flex--space"></li>
            <li className="flex--space"></li>
        </>
    );

};

const MenuItems = ({ items, depthLevel }) => {

    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {

        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return (() => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        });

    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };

    return (
        <li
            className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}
        >
            {
                items.url && items.submenu ? (
                    <>
                        <button
                            type="button"
                            aria-haspopup="menu"
                            aria-expanded={dropdown ? 'true' : 'false'}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {
                                window.innerWidth < 960 && depthLevel === 0 ? (
                                    items.title
                                ) : (
                                    <Link to={items.url}>
                                        <i className={ items.iconClass }></i>
                                        <span> {items.title} </span>
                                    </Link>
                                )
                            }

                            {
                                depthLevel > 0 && window.innerWidth < 960 ? null : (
                                    depthLevel > 0 && window.innerWidth > 960 ? (
                                        <span>&raquo;</span>
                                    ) : (
                                        <span className="arrow" />
                                    )
                                )
                            }
                        </button>

                        <Dropdown
                            depthLevel={depthLevel}
                            submenus={items.submenu}
                            dropdown={dropdown}
                        />
                    </>
                ) : !items.url && items.submenu ? (
                    <>
                        <button
                            type="button"
                            aria-haspopup="menu"
                            aria-expanded={dropdown ? 'true' : 'false'}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {items.title}{' '}
                            {
                                depthLevel > 0 ? (
                                    <span>&raquo;</span>
                                ) : (
                                    <span className="arrow" />
                                )
                            }
                        </button>

                        <Dropdown
                            depthLevel={depthLevel}
                            submenus={items.submenu}
                            dropdown={dropdown}
                        />
                    </>
                ) : (
                    <Link to={items.url}>
                        <i className={ items.iconClass }></i>
                        <span> {items.title} </span>
                    </Link>
                )
            }
        </li>
    );

};

const Dropdown = ({ submenus, dropdown, depthLevel }) => {

    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

    return (
        <ul
            className={`dropdown ${dropdownClass} ${
                dropdown ? 'show' : ''
            }`}
        >
            {
                submenus.map((submenu, index) => (
                    <MenuItems
                        items={submenu}
                        key={index}
                        depthLevel={depthLevel}
                    />
                ))
            }
        </ul>
    );

};

export default NavBar;
