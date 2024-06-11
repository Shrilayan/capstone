package com.ecommerce_website.React.SpringBoot.MySQL.restController;

import com.ecommerce_website.React.SpringBoot.MySQL.model.Product;
import com.ecommerce_website.React.SpringBoot.MySQL.repository.ProductRepository;
import com.ecommerce_website.React.SpringBoot.MySQL.service.CartItemService;
import com.ecommerce_website.React.SpringBoot.MySQL.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/product")
public class ProductsRestController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    //private CartItemService cartItemService;

    @GetMapping
    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        Product newProduct = productRepository.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(newProduct);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid product Id:" + id));
        return ResponseEntity.ok().body(product);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProductsByName(@RequestParam String name) {
        List<Product> products = productRepository.searchByName(name);
        if (products.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(products);
        }
    }
}

