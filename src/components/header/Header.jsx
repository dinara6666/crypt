import React, { useState } from 'react';
import "./Header.css";
import { Logo, Pol1 } from "../../assets/index.js";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="container">
            <div className="head1">
                <img className='logoo' src={Logo} alt="Logo" />

                <img className="menu-icon" src={Pol1} alt="Menu" onClick={toggleMenu} />

                <div className="h66 desktop-menu">
                    <h6>Benefits</h6>
                    <h6>Features</h6>
                    <h6>Reviews</h6>
                    <h6>Pricing</h6>
                    <h6>Contact</h6>
                </div>

                <div className="bt1">
                    <button>Buy CrypAppy</button>
                </div>
            </div>

            {menuOpen && (
                <div className="mobile-menu">
                    <h6 onClick={toggleMenu}>Benefits</h6>
                    <h6 onClick={toggleMenu}>Features</h6>
                    <h6 onClick={toggleMenu}>Reviews</h6>
                    <h6 onClick={toggleMenu}>Pricing</h6>
                    <h6 onClick={toggleMenu}>Contact</h6>

                </div>
            )}
        </div>
    );
};

export default Header;
