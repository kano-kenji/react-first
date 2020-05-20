import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    const topMenu = ['Contact', 'About', 'Home Works', 'Home'];
    const countries = ['Australia', 'Belarus', 'Kenya', 'Russia', 'UK', 'USA', 'Ukraine'];
    const footerMenu = [
        ['Footer-1', 'Foo/te/r-2', 'Footer-3'],
        ['Footer-2.1', 'Footer-2.2', 'Footer-2.3'],
        ['Contact', 'About', 'Products', 'Home'],
    ];
    const copyright = 'Copyright © ' + (new Date()).getFullYear() + ' Alexander Tarasevich';

    const showItem = (item) => {
        alert('Clicked' + ' ' + item);
    }

    const showText = (text) => {
        document.getElementById('text-area').innerHTML = text;
    }

    return (
        <div>
            <Header topMenu={topMenu} attempt={showItem}/>
            <Content countries={countries} attempt={showText}/>
            <Footer footerMenu={footerMenu} copyright={copyright} attempt={showItem}/>
        </div>
    );
}

export default App;
