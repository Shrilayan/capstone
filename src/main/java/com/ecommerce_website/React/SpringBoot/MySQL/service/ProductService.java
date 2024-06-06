package com.ecommerce_website.React.SpringBoot.MySQL.service;

import com.ecommerce_website.React.SpringBoot.MySQL.model.Product;
import com.ecommerce_website.React.SpringBoot.MySQL.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product addNewProduct(Product product) {
        return productRepository.save(product);
    }
    public List<Product> getAllProducts() {
        return (List<Product>) productRepository.findAll();
    }
    public void deleteProductDetails( int productId) {
        productRepository.deleteById(productId);
    }

}
