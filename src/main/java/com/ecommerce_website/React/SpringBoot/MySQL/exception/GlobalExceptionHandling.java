package com.ecommerce_website.React.SpringBoot.MySQL.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandling {

    @ExceptionHandler(UserNotFoundException.class)
    public String handleException() {
        System.out.println("User not found so throwing User not found exception!!");
        return "error";
    }

    @ExceptionHandler(LoginFailureException.class)
    public ResponseEntity handleException(LoginFailureException ex) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(ex.getMessage());
    }

}
