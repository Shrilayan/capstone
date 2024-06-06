package com.ecommerce_website.React.SpringBoot.MySQL.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @Column(name = "Username")
    private String userName;

    @Column(name = "Password")
    private String password;

    @Column(name = "EmailId")
    private String emailId;

    @Column(name = "Address")
    private String address;

    @Column(name = "Type")
    private String type;

    public User() {
    }

    public User(String userName, String password, String emailId, String address) {
        this.userName = userName;
        this.password = password;
        this.emailId = emailId;
        this.address = address;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }


}
