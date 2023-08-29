//import { Link } from "react-router-dom";
//import SubMenu from "../nav/submenu";


export function H4Title (title) {

    return (
        <>
            <div className="h4--container">
                <h4 className="h4--title"> { title } </h4>
            </div>
        </>
    );

}


export function H6Title (title) {

    return (
        <>
            <div className="h6--container">
                <h6 className="h6--title"> { title } </h6>
            </div>
        </>
    );

}


export function H6ITitle (title, iclass) {

    return (
        <>
            <div className="h6--container">
                <h6 className="h6--title"> <i className={ iclass } ></i> { title } </h6>
            </div>
        </>
    );

}


export function Banner (classname) {

    return (
        <>
            <div id={ classname } className={ classname }>
            </div>
        </>
    );

}

/*
export function MenuBody (data, index) {

    const itemIndex = index;
    const itemPath = data.path;
    const itemTitle = data.title;

    return (
        <>
            <Link to={ itemPath }>
                <li key={ itemIndex }>
                    <span> { itemTitle } </span>
                    <SubMenu subtitle={ itemTitle } />
                </li>
            </Link>
        </>
    );

}
*/
export const BackToTop = () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}

export const BackToBottom = () => {

    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
    });

};

export const ScrollToTarget = (ref) => {

    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
    });

};



/*

import { useRef } from 'react';

function Slider () {

    const head = useRef(null);
    const body = useRef(null);
    const foot = useRef(null);

    const scrollAnySection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (

        <div>
            <div style={{ textAlign: "center", fontSize: "5rem" }} >
                <h2 onClick={() => scrollAnySection (head) }> Head </h2>
                <h2  onClick={() => scrollAnySection (body)}> Body </h2>
                <h2 onClick={() => scrollAnySection (foot)}> Foot </h2>
            </div>
            <h2 id="top" style={{ textAlign: "center", fontSize: "5rem" }} >
                <span>Top of the page</span>
            </h2>
            <h2 ref={ head } style={{ textAlign: "center", marginTop: "150rem", fontSize: "5rem" }} >
                <span>Head of the page</span>
            </h2>
            <h2 ref={ body } style={{ textAlign: "center", marginTop: "150rem", fontSize: "5rem" }} >
                <span>Body of the page</span>
            </h2>
            <h2 ref={ foot } style={{ textAlign: "center", marginTop: "150rem", fontSize: "5rem" }} >
                <span>Foot of the page</span>
            </h2>
            <h2 id="bottom" style={{ textAlign: "center", marginTop: "150rem", fontSize: "5rem" }} >
                <span>Bottom of the page</span>
            </h2>
        </div>

    );
}

export default Slider;

*/
