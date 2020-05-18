import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    const topMenu = ['Contact', 'About', 'Products', 'Home'];
    const footerMenu = [
        ['Footer-left-1', 'Footer-center-2', 'Footer-right-3'],
        ['Footer-left-2.1', 'Footer-center-2.2', 'Footer-right-2.3'],
        ['Contact', 'About', 'Products', 'Home'],
    ];
    const copyright = 'Copyright © ' + (new Date).getFullYear() + ' Alexander Tarasevich';
    return (
        <div>
            <Header topMenu={topMenu} />
            <Content />
            <Footer footerMenu={footerMenu} copyright={copyright} />
        </div>
    );
}

export default App;
