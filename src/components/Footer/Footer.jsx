import React from 'react';
import "./Footer.css";
import { Inst1, Inst2, Inst3, Logo } from "../../assets/index.js";

const Footer = () => {
    return (
        <div className={"container"}>
            <div className={"uu"}>
                <div className={"logo2"}>
                    <img src={Logo}/>

                    <h4>Subscribe to our newsletter</h4>

                    <div className={"img1"}>
                        <img src={Inst1}/>
                        <img src={Inst2}/>
                        <img src={Inst3}/>
                    </div>

                    <div className={"inp1"}>
                        <h3>Enter your email...</h3>
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="search-input"
                        />


                    </div>


                    <div className={"bt6"}>
                    <button>button</button>

                  <p>Crafted by Marion & Co. | Powered by Webflow More templates  License Style Guide</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
