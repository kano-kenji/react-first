import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    const appVersion = '0.1.3';
    const menu = ['About', 'Products', 'Contact'];
    return (
        //JSX format
        <div className="App">
            <Header version={appVersion} menu1={menu}/>

            <Content />

            <Footer v={appVersion}/>
        </div>
    );
}

export default App;
