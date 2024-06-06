package com.ecommerce_website.React.SpringBoot.MySQL.restController;

import com.ecommerce_website.React.SpringBoot.MySQL.exception.LoginFailureException;
import com.ecommerce_website.React.SpringBoot.MySQL.exception.UserNotFoundException;
import com.ecommerce_website.React.SpringBoot.MySQL.model.Login;
import com.ecommerce_website.React.SpringBoot.MySQL.model.User;
import com.ecommerce_website.React.SpringBoot.MySQL.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class LoginRestController {

    @Autowired
    private UserRepository userRepository;

   @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody Login login) throws LoginFailureException {
        System.out.println(login.getUserName() + " " + login.getPassword() + "Verify!!!");
        User user = userRepository.searchByUserName(login.getUserName());

        if (user == null) {
            return new ResponseEntity(login.getUserName() + "User Not Found", HttpStatus.NOT_FOUND);
        }
        if (user.getUserName().equals(login.getUserName()) && user.getPassword().equals(login.getPassword())) {
            return new ResponseEntity(login.getUserName() + " User found ", HttpStatus.OK);
        } else {
            throw new LoginFailureException("Invalid Username or Password.");
        }
    }
    @ExceptionHandler(UserNotFoundException.class)
    public String handleException() {
        System.out.println("User not found so throwing User not found exception!!");
        return "error";
    }
}

