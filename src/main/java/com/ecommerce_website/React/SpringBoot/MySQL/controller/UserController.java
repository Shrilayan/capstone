package com.ecommerce_website.React.SpringBoot.MySQL.controller;



import com.ecommerce_website.React.SpringBoot.MySQL.exception.LoginFailureException;
import com.ecommerce_website.React.SpringBoot.MySQL.exception.UserNotFoundException;
import com.ecommerce_website.React.SpringBoot.MySQL.model.Login;
import com.ecommerce_website.React.SpringBoot.MySQL.model.User;
import com.ecommerce_website.React.SpringBoot.MySQL.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;


    @GetMapping("/user")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> listOfUser = new ArrayList<>();
        userRepository.findAll().forEach(user -> listOfUser.add(user));
        return new ResponseEntity<>(listOfUser, HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) throws UserNotFoundException {
        User user = userRepository.findById(id).
                orElseThrow(() -> new UserNotFoundException("Not Found"));
        return ResponseEntity.ok(user);
    }
    @PostMapping("/{username}")
    public ResponseEntity<User> getUserByUserName(@PathVariable String username) throws UserNotFoundException, LoginFailureException {
        User user = userRepository.searchByUserName(username);
        if (user == null) {
            return new ResponseEntity(username + " User Not Found", HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(user);
    }


    @PostMapping("/register")
    public ResponseEntity<User> createProduct(@RequestBody User user) {
        User createdUser = userRepository.save(user);
        return ResponseEntity.ok(createdUser);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<HttpStatus> deleteAllUser() {
        userRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}




