package com.ecommerce_website.React.SpringBoot.MySQL.repository;

import com.ecommerce_website.React.SpringBoot.MySQL.model.CartItem;

import com.ecommerce_website.React.SpringBoot.MySQL.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    // Method to find a cart item by product
    CartItem findByProduct(Product product);

    // Other custom methods can be added as needed
}

