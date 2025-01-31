import React from 'react';
import Header from "./components/header/Header.jsx";
import Crypt1 from "./components/crypt1/Crypt1.jsx";
import Fin from "./components/fin/Fin.jsx";
import Manage from "./components/manage/Manage.jsx";
import Back from "./components/back/Back.jsx";
import Our from "./components/Our/Our.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
    return (
        <div>
            <Header/>
            <Crypt1/>
            <Fin/>
            <Manage/>
            <Back/>
            <Our/>
            <Footer/>
        </div>
    );
};

export default App;