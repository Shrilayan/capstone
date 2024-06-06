package com.ecommerce_website.React.SpringBoot.MySQL.restController;

import com.ecommerce_website.React.SpringBoot.MySQL.model.Product;
import com.ecommerce_website.React.SpringBoot.MySQL.repository.ProductRepository;
import com.ecommerce_website.React.SpringBoot.MySQL.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product/")
public class ProductsRestController {

    @Autowired
    private ProductService productService ;

    @PostMapping("/addNewProduct")
    public Product addNewProduct(@RequestBody Product product){
        return productService.addNewProduct(product);
    }
    @GetMapping("/getAllProducts")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }


    @DeleteMapping("/deleteProductDetails/{productId}")
    public void deleteProductDetails(@PathVariable("productId")int productId){
        productService.deleteProductDetails(productId);
    }


}

