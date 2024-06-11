import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

//pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LoginSignup from './components/LoginSignup';
import Nowlogin from './components/Nowlogin';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';


import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import PaymentPage from './components/PaymentPage.jsx';

  

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<LoginSignup />} />
            <Route path='nowlogin' element={<Nowlogin />} />
            <Route path='productList' element={<ProductList />} />
            <Route path='cartPage' element={<CartPage />} />
            <Route path='payment' element={<PaymentPage />} />
        </Route>
        
    )
)

const root =ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>,
    );
