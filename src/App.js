import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
    const menu = ['About', 'Products', 'Contact'];
    return (
        <div>
            <Header menu={menu}/>
            <Content />
            <Footer />
        </div>
    );
}

export default App;
