import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7077/product')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddToCart = (product) => {
        const newCartItem = { ...product, quantity: 1 };
        setCart([...cart, newCartItem]);

        axios.post(`http://localhost:7077/api/cart-items/add?productId=${product.id}&quantity=1`)
            .then(response => {
                console.log('Product added to cart:', response.data);
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
            });
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1 className="text-center mt-4"></h1>
            <h2 className="text-center mb-4">Menu for the day!</h2>
            <div className="d-flex justify-content-end mb-4">
                <Link to="/cartPage" className="btn btn-primary mr-3">
                    <i className="bi bi-cart-fill"></i> ({cart.reduce((total, item) => total + item.quantity, 0)})
                </Link>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="form-control"
                    style={{ maxWidth: '300px' }}
                />
            </div>
            <div className="row">
                {filteredProducts.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={product.imageUrl} alt={product.name} height="200px" width="300px" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Cost: ₹{product.price}</p>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="card-footer">
                                <button type="button" className="btn btn-success btn-block" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;



