package com.ecommerce_website.React.SpringBoot.MySQL.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "productId")
   private int productId;

    @Column(name = "productName")
    private String productName;

    @Column(name = "productDescription")
    private String productDescription;

    @Column(name = "productDiscountedPrice")
    private double productDiscountedPrice;

    @Column(name = "productActualPrice")
    private double productActualPrice;

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public double getProductDiscountedPrice() {
        return productDiscountedPrice;
    }

    public void setProductDiscountedPrice(double productDiscountedPrice) {
        this.productDiscountedPrice = productDiscountedPrice;
    }

    public double getProductActualPrice() {
        return productActualPrice;
    }

    public void setProductActualPrice(double productActualPrice) {
        this.productActualPrice = productActualPrice;
    }
}
