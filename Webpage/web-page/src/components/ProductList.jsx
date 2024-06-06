import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [imageData, setImageData] = React.useState({});


    useEffect(() => {
        axios.get('http://localhost:8085/api/products')
            .then(response => {
                setProducts(response.data);
                response.data.map(product => {
                    console.log(product.imageUrl);
                    setImageData(product.imageUrl);
                });

            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product">

                    <img src={imageData} alt={product.name} />


                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;