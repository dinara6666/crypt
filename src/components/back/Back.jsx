import React from 'react';
import "./Back.css"
import {Lie1, Lie2, Lie3, Lie4, Lie5, Person1, Person2, Person3, Person4, Star1} from "../../assets/index.js";


const Back = () => {
    return (
        <div className={"container"}>

            <div className={"bk"}>

                <div className={"blue"}>
                    <h5>the best crypto App</h5>
                    <h4>Backed by the biggest names in the <br/> industry</h4>
                </div>

                <div className={"blue2"}>
                    <img src={Lie1}/>
                    <img src={Lie2}/>
                    <img src={Lie3}/>
                    <img src={Lie4}/>
                    <img src={Lie5}/>
                </div>


                <div className={"boblue"}>

                    <div className={"blue3"}>
                        <img src={Star1}/>
                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Suspendisse varius enim
                            in eros <br/> elementum tristique. Duis cursus, <br/> mi quis viverra ornare, eros
                            dolor <br/> interdum nulla,
                            ut commodo diam <br/> libero vitae erat. Aenean faucibus ni <br/> bh et justo cursus id
                            rutrum
                            lorem <br/> imperdiet. Nuncut sem vitae risus <br/> tristique posuere.</p>

                        <img src={Person1}/>

                    </div>


                    <div className={"blue4"}>
                        <img src={Star1}/>
                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Suspendisse varius enim
                            in eros <br/> elementum tristique. Duis cursus, <br/> mi quis viverra ornare, eros
                            dolor <br/> interdum nulla,
                            ut commodo diam <br/> libero vitae erat. Aenean faucibus ni <br/> bh et justo cursus id
                            rutrum
                            lorem <br/> imperdiet. Nuncut sem vitae risus <br/> tristique posuere.</p>

                        <img src={Person2}/>

                    </div>


                    <div className={"blue5"}>
                        <img src={Star1}/>
                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Suspendisse varius enim
                            in eros <br/> elementum tristique. Duis cursus, <br/> mi quis viverra ornare, eros
                            dolor <br/> interdum nulla,
                            ut commodo diam <br/> libero vitae erat. Aenean faucibus ni <br/> bh et justo cursus id
                            rutrum
                            lorem <br/> imperdiet. Nuncut sem vitae risus <br/> tristique posuere.</p>

                        <img src={Person3}/>

                    </div>


                    <div className={"blue6"}>
                        <img src={Star1}/>
                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. <br/> Suspendisse varius enim
                            in eros <br/> elementum tristique. Duis cursus, <br/> mi quis viverra ornare, eros
                            dolor <br/> interdum nulla,
                            ut commodo diam <br/> libero vitae erat. Aenean faucibus ni <br/> bh et justo cursus id
                            rutrum
                        lorem <br/> imperdiet. Nuncut sem vitae risus <br/> tristique posuere.</p>

                    <img src={Person4}/>

                </div>
                </div>

            </div>
        </div>
    );
};

export default Back;