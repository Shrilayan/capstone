import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


//pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LoginSignup from './components/LoginSignup';
import Nowlogin from './components/nowlogin';


import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<LoginSignup />} />
            <Route path='nowlogin' element={<Nowlogin />} />
        </Route>
        
    )
)

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
