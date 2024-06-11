import React from 'react';
import './App.css';
import { useState } from 'react';
import{ Outlet } from 'react-router-dom'
//navbar
import Navbar from './components/Navbar';
//footer
import FooterComponent from './components/FooterComponent';
function App() {

    return (
        <div className="App">
            <header>
                <Navbar />
            </header>
            <main>
                <h1></h1>
                <Outlet />
            </main>
            <footer>
                < FooterComponent />
            </footer>
        </div>
    );
}

export default App
