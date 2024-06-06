/*package com.ecommerce_website.React.SpringBoot.MySQL.model;

import com.ecommerce_website.React.SpringBoot.MySQL.service.ProductService;
import jakarta.persistence.*;

@Entity
@Table(name = "Cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column
    private int cartTd;

    @OneToOne
    private Product product;

    @OneToOne
    private User user;

    public int getCartTd() {
        return cartTd;
    }

    public void setCartTd(int cartTd) {
        this.cartTd = cartTd;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}*/
