import React from 'react';
import "./Crypt1.css"
import {Appl, Appl2, Play, Strl, Tel1} from "../../assets/index.js";

const Crypt1 = () => {
    return (
        <div className={"container"}>
            <div>


                <div className={"h11"}>
                    <p>The crypto portfolio <br/> app that makes you <br/> smile. Every day.</p>
                </div>

                <div className={"p1"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                        elementum
                        tristique. Duis cursus, mi <br/> quis viverra ornare, eros dolor.</p>
                </div>

                <div className={"app"}>
                    <img src={Appl}/>
                    <img src={Appl2}/>
                </div>


                <div className={"tel"}>
                    <img src={Tel1}/>

                </div>


                <div className={"fi"}>

                    <h2>New crypto finance app</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                        eros <br/> elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                        ut <br/> commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
                        lorem <br/>
                        imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>



                <div className={"f"}>
                <div className={"hz"}>
                    <img src={Play}/>
                    <h5>Benefit description</h5>
                    <p>Suspendisse varius enim in eros elementum tristique.
                        Duis <br/> cursus.</p>


                    <div className={"str"}>
                        <span>Learn more</span>
                        <img src={Strl}/>
                    </div>

                </div>


                <div className={"hz"}>
                    <img src={Play}/>
                    <h5>Benefit description</h5>
                    <p>Suspendisse varius enim in eros elementum tristique.
                        Duis <br/> cursus.</p>


                    <div className={"str"}>
                        <span>Learn more</span>
                        <img src={Strl}/>
                    </div>

                </div>


                <div className={"hz"}>
                    <img src={Play}/>
                    <h5>Benefit description</h5>
                    <p>Suspendisse varius enim in eros elementum tristique.
                        Duis <br/> cursus.</p>


                    <div className={"str"}>
                        <span>Learn more</span>
                        <img src={Strl}/>
                    </div>
                </div>
                </div>


            </div>
        </div>
    );
};

export default Crypt1;