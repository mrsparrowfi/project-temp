import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SubCategory } from "../data/data";

import "./navbar.css";
import logo from "../assets/images/logo/oriyo.png";


function NavBar () {

    return (
        <Nav>
            <Logo />
            <MenuItem id="item--home" iconClass = "bi bi-house-door" title = "Home" />
            <MenuItem id="item--design" iconClass = "bi bi-grid" title = "Design" />
            <MenuItem id="item--apparel" iconClass = "bi bi-gift" title = "Apparel" />
            <MenuItem id="item--homeware" iconClass = "bi bi-bootstrap" title = "Homeware" />
            <MenuItem id="item--accessories" iconClass = "bi bi-shop" title = "Accessories" />
            <MenuItem id="item--drinkware" iconClass = "bi bi-bank" title = "Drinkware" />
            <MenuItem id="item--aboutus" iconClass = "bi bi-bank" title = "About Us" />
        </Nav>
    );

}

function Nav (props) {

    return (
        <nav>
            <ul className="nav--container" id="nav--container">
                { props.children }
                <li className="flex--space"></li>
                <li className="flex--space"></li>
                <li className="flex--space"></li>
                <li className="flex--space"></li>
            </ul>
        </nav>
    );

}

function Logo () {

    return (
        <>
            <li className="flex--space"></li>
            <li className="flex--space"></li>
            <li className="logo--img" id="logo--img">
                <Link to="/">
                    <img src={ logo } alt="logo--img" />
                </Link>
            </li>
            <li className="flex--space"></li>
            <li className="flex--space"></li>
        </>
    );

}

function MenuItem (props) {

    const [ open, setOpen ] = useState (false);
    const preventChildOnClick = (event) => {
        event.stopPropagation();
    }

    return (
        <li className="menu--item" id={ props.id } onClick={() => { setOpen(!open) }}>
            {
                (props.title !== 'Home') ? (
                    <Link to={ props.title }>
                        <i className={ props.iconClass }></i> 
                        <span> { props.title } </span>
                    </Link>
                ) : (
                    <Link to="/">
                        <i className={ props.iconClass }></i> 
                        <span> { props.title } </span>
                    </Link>
                )
            }
            {
                (props.title !== 'Home') ? (
                    <div 
                        id="component--holder" 
                        className={`component--holder ${ open ? 'active' : ''}`} 
                        onClick= {(e) => preventChildOnClick(e)}
                    >
                        <SubMenu navTitle= { props.title } />
                    </div>
                ) : null
            }
        </li>
    );

}

function SubMenu (props) {

    const data = SubCategory();
    const title = props.navTitle;
    const filterMenu = data.filter((item) => item.catTitle === title)

    return (
        <ul className="menu--container" id="menu--container">
            {
                filterMenu.map((list) => 
                    <li className="menu--title" id={ list.sid }>
                        <Link to={`${title}/${list.subcategoryTitle}`}>
                            <span> { list.subcategoryTitle } </span>
                        </Link>
                    </li>
                )
            }
        </ul>
    );

}


export default NavBar;
