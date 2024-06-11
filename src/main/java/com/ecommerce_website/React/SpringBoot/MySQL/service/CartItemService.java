package com.ecommerce_website.React.SpringBoot.MySQL.service;


import com.ecommerce_website.React.SpringBoot.MySQL.model.CartItem;
import com.ecommerce_website.React.SpringBoot.MySQL.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartItemService {

    private final CartItemRepository cartItemRepository;

    @Autowired
    public CartItemService(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    public void addToCart(CartItem cartItem) {
        // If the same product already exists in the cart, update the quantity
        CartItem existingCartItem = cartItemRepository.findByProduct(cartItem.getProduct());
        if (existingCartItem != null) {
            existingCartItem.setQuantity(existingCartItem.getQuantity() + cartItem.getQuantity());
            cartItemRepository.save(existingCartItem);
        } else {
            cartItemRepository.save(cartItem);
        }
    }

    public void updateCartItem(Long cartItemId, int quantity) {
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid cart item Id:" + cartItemId));
        cartItem.setQuantity(quantity);
        cartItemRepository.save(cartItem);
    }

    public void removeCartItem(Long cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }

    public CartItem addCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);


        // Other methods can be added as needed
    }
}