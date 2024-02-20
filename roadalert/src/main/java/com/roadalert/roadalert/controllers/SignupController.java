package com.roadalert.roadalert.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roadalert.roadalert.dto.SignupRequest;
import com.roadalert.roadalert.entities.Customer;
import com.roadalert.roadalert.services.CustomerService;

@RestController
@RequestMapping("/signup")
public class SignupController {

    private final CustomerService customerService;

    @Autowired
    public SignupController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping
    public ResponseEntity<?> signupCustomer(@RequestBody SignupRequest signupRequest) {
        try {
            Customer createdCustomer = customerService.createCustomer(signupRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdCustomer);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to create customer");
        }
    }
}