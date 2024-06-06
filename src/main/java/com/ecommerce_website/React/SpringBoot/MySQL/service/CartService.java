/*package com.ecommerce_website.React.SpringBoot.MySQL.service;

import com.ecommerce_website.React.SpringBoot.MySQL.model.Cart;
import com.ecommerce_website.React.SpringBoot.MySQL.model.Product;
import com.ecommerce_website.React.SpringBoot.MySQL.model.User;
import com.ecommerce_website.React.SpringBoot.MySQL.repository.CartRepository;
import com.ecommerce_website.React.SpringBoot.MySQL.repository.ProductRepository;
import com.ecommerce_website.React.SpringBoot.MySQL.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;

    public void addToCart(int productId) {
        Product product = productRepository.findById(productId).get();
        String username
        User user = null;
        if(username != null) {
            user = userRepository.findById(username).get();
        }
        if (product != null && user != null) {
            Cart cart =new Cart(product, user);
            cartRepository.save(cart);
        }

    }
}*/
