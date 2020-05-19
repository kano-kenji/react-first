import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    const topMenu = ['Contact', 'About', 'Home Works', 'Home'];
    const footerMenu = [
        ['Footer-1', 'Footer-2', 'Footer-3'],
        ['Footer-2.1', 'Footer-2.2', 'Footer-2.3'],
        ['Contact', 'About', 'Products', 'Home'],
    ];
    const copyright = 'Copyright © ' + (new Date()).getFullYear() + ' Alexander Tarasevich';
    return (
        <div>
            <Header topMenu={topMenu} />
            <Content />
            <Footer footerMenu={footerMenu} copyright={copyright} />
        </div>
    );
}

export default App;
