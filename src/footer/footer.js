import React, { useState, useEffect } from "react";

import "./footer.css";
import { BackToTop, BackToBottom } from "../controllers/controller";


function Footer () {

    const [ showBtn, setShowBtn ] = useState (false);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShowBtn (true);
            } else {
                setShowBtn (false);
            }
        })

    }, []);


    return (

        <footer>
            <section className="context--contact">
                <h2> Get In Touch </h2>
                <div className="line--separator"></div>
                <h6> +358 (0)41 741 2915 </h6>
                <h6> oriyostyle@gmail.com </h6>
            </section>

            <section className="social--icons">
                <h2> Follow Us </h2>
                <div className="line--separator"></div>
                <ul className="content--icons">
                    <li>
                        <a href><i className="bi bi-facebook"></i></a>
                    </li>
                    <li>
                        <a href><i className="bi bi-instagram"></i></a>
                    </li>
                    <li>
                        <a href><i className="bi bi-twitter"></i></a>
                    </li>
                    <li>
                        <a href><i className="bi bi-tiktok"></i></a>
                    </li>
                </ul>
            </section>

            <section className="content--copywrite">
                <h2> Oriyostyles </h2>
                <div className="line--separator first--line"></div>
                <h6>
                    All profits go towards my journey as a creator <br />
                    I really appreciate your support
                </h6>
                <div className="line--separator second--line"></div>
                <h6>
                    © 2023 <a href="www.oriyosoft.com"> www.oriyosoft.com </a><br />
                    All rights reserved
                </h6>
                <div className="line--separator third--line"></div>
                <div className="line--separator fourth--line"></div>
                <div className="line--separator fifth--line"></div>
                <div className="line--separator sixth--line"></div>
            </section>

            <div className="footer--bottom">
                { showBtn && 
                    <button id="btn--back2top" className="btn--back2top" onClick={ BackToTop }>
                        <i className="bi bi-chevron-compact-up"></i>
                    </button>
                }

                { showBtn && 
                    <button id="btn--back2bottom" className="btn--back2bottom" onClick={ BackToBottom }>
                        <i className="bi bi-chevron-compact-down"></i>
                    </button>
                }
            </div>

        </footer>

    );
}

export default Footer;
