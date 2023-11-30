import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import all controllers 
import { BackToTop, FooterGradientSeparator } from "../controllers/controller";

// import all images
import logo from "../assets/images/logo/oriyo.png";

// import all styles 
import "./footer.css";

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
            { FooterGradientSeparator() }
            <ul className="footer--content">
                <li className="content--product">
                    <h6><i className="bi bi-gift"></i> Products </h6>
                    <div className="line--separator"></div>
                    <div>
                        <Link to="/apparel">
                            <i className="bi bi-chevron-compact-right"></i>
                            <span> Apparels </span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/homeware">
                            <i className="bi bi-chevron-compact-right"></i>
                            <span> Home & Descors </span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/accessories">
                            <i className="bi bi-chevron-compact-right"></i>
                            <span> Accessories </span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/drinkware">
                            <i className="bi bi-chevron-compact-right"></i>
                            <span> Drinkware </span>
                        </Link>
                    </div>
                </li>

                <li className="flex--space"></li>

                <li className="content--policy">
                    <h6><i className="bi bi-link-45deg"></i> Useful Links </h6>
                    <div className="line--separator"></div>
                    <div>
                        <Link to="/design">
                            <i className="bi bi-chevron-compact-right"></i>
                            <span> All Designs </span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/privacy">
                            <i className="bi bi-chevron-compact-right"></i>
                            <span> Privacy policy </span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/cookie">
                            <i className="bi bi-chevron-compact-right"></i>
                            <span> Cookie policy </span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/contactus">
                            <i className="bi bi-chevron-compact-right"></i>
                            <span> Contact us </span>
                        </Link>
                    </div>
                </li>

                <li className="flex--space"></li>

                <li className="footer--logo">
                    <Link to="/">
                        <div className="logo--img">
                            <img src={ logo } alt="logo" />
                        </div>
                        <div className="logo--wrapper">
                            <svg width="100%" height="4rem">
                                <text x="50%" y="100%" dy="-0.25em" textAnchor="middle">
                                    Oriyostyles
                                </text>
                            </svg>
                        </div>
                    </Link>
                    <h6>
                        All profits go towards my journey as a creator.<br />
                        I really appreciate your support
                    </h6>
                    <div className="line--separator third--line"></div>
                    <div className="line--separator fourth--line"></div>
                    <div className="line--separator fifth--line"></div>
                    <div className="line--separator sixth--line"></div>
                    <div className="line--separator seventh--line"></div>
                </li>

                <li className="flex--space"></li>

                <li className="context--contact">
                    <h2><i className="bi bi-telephone-outbound"></i> Get In Touch </h2>
                    <div className="line--separator"></div>
                    <h6><i className="bi bi-phone"></i> +358 (0)41 741 2915 </h6>
                    <h6><i className="bi bi-chat"></i> +358 (0)41 741 2915 </h6>
                    <h6><i className="bi bi-envelope"></i> oriyostyle@gmail.com </h6>
                </li>

                <li className="flex--space"></li>

                <li className="social--icons">
                    <h2><i class="bi bi-people"></i> Follow Us </h2>
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
                </li>
            </ul>

            <section className="content--copywrite">
                <h6>
                    ©2023 <a href="www.oriyosoft.com"> www.oriyosoft.com. </a>
                    All rights reserved
                </h6>
            </section>

            <div className="footer--bottom">
                { showBtn && 
                    <button id="btn--back2top" className="btn--back2top" onClick={ BackToTop }>
                        <i className="bi bi-chevron-compact-up"></i>
                    </button>
                }
            </div>
        </footer>

    );
}

export default Footer;
