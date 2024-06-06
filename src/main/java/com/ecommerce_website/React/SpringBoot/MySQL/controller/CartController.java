/*package com.ecommerce_website.React.SpringBoot.MySQL.controller;

import com.ecommerce_website.React.SpringBoot.MySQL.model.Cart;
import com.ecommerce_website.React.SpringBoot.MySQL.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("addToCart/{productId}")
    public Cart addToCart(@PathVariable(name = "productId")int productId) {
        return cartService.addToCart(productId);
    }
}*/
