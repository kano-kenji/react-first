import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
    return (
        //JSX format
        <div className="App">
            <Header />

            <Content />

            <Footer />
        </div>
    );
}

export default App;
