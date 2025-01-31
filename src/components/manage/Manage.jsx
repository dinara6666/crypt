import React from 'react';
import "./Manege.css"
import {Play, Tel3, Tel4} from "../../assets/index.js";

const Manage = () => {
    return (
        <div className={"container"}>
            <div className={"mobil"}>

                <div className={"mobil-head"}>
                    <h5 className={"mob"}>mobile friendly</h5>

                    <h4>Manage your money from <br/> anywhere</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse varius enim in eros elementum tristique. Duis <br/> cursus, mi quis viverra
                        ornare.</p>
                </div>



                <div className={"pl2"}>
                <div>
                    <img src={Play}/>
                    <h6>Benefit description</h6>
                    <p>Suspendisse varius enim in eros elementum tristique. Duis <br/> cursus.</p>
                </div>

                <div>
                    <img src={Play}/>
                    <h6>Benefit description</h6>
                    <p>Suspendisse varius enim in eros elementum tristique. Duis <br/> cursus.</p>
                </div>
                </div>


                <div className={"tel45"}>
                    <img src={Tel3}/>
                    <img src={Tel4}/>
                </div>

                <div className={"bt4"}>
                <button>Get CrypAppy </button>
                </div>


            </div>
        </div>
    );
};

export default Manage;