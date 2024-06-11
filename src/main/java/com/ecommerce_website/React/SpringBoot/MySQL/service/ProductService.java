package com.ecommerce_website.React.SpringBoot.MySQL.service;

import com.ecommerce_website.React.SpringBoot.MySQL.model.Product;
import com.ecommerce_website.React.SpringBoot.MySQL.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public void deleteProductDetails( long id) {
        productRepository.deleteById(id);
    }


    public Optional<Product> getProductById(Long productId) {
        return productRepository.findById(productId);
    }
}
