package com.ecommerce_website.React.SpringBoot.MySQL.controller;

import com.ecommerce_website.React.SpringBoot.MySQL.model.CartItem;
import com.ecommerce_website.React.SpringBoot.MySQL.model.Product;
import com.ecommerce_website.React.SpringBoot.MySQL.service.CartItemService;
import com.ecommerce_website.React.SpringBoot.MySQL.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/cart-items")
public class CartItemController {

    private final CartItemService cartItemService;
    private final ProductService productService;

    @Autowired
    public CartItemController(CartItemService cartItemService, ProductService productService) {
        this.cartItemService = cartItemService;
        this.productService = productService;
    }

    @PostMapping("/add")
    public ResponseEntity<String> addToCart(@RequestParam Long productId, @RequestParam int quantity) {
        Product product = productService.getProductById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid product Id: " + productId));
        CartItem cartItem = new CartItem();
        cartItem.setProduct(product);
        cartItem.setQuantity(quantity);
        cartItemService.addCartItem(cartItem);
        return ResponseEntity.status(HttpStatus.CREATED).body("Product added to cart successfully.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateCartItem(@PathVariable Long id, @RequestParam int quantity) {
        cartItemService.updateCartItem(id, quantity);
        return ResponseEntity.ok().body("Cart item updated successfully.");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeCartItem(@PathVariable Long id) {
        cartItemService.removeCartItem(id);
        return ResponseEntity.ok().body("Cart item removed successfully.");
    }

    @GetMapping
    public ResponseEntity<List<CartItem>> getAllCartItems() {
        List<CartItem> cartItems = cartItemService.getAllCartItems();
        return ResponseEntity.ok().body(cartItems);
    }
}