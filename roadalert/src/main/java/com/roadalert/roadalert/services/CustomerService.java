package com.roadalert.roadalert.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roadalert.roadalert.dto.SignupRequest;
import com.roadalert.roadalert.entities.Customer;
import com.roadalert.roadalert.repositories.CustomerRepository;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Customer createCustomer(SignupRequest signupRequest) {
        Customer customer = new Customer();
        customer.setName(signupRequest.getName());
        customer.setEmail(signupRequest.getEmail());
        customer.setPassword(signupRequest.getPassword());
        // Définir le rôle par défaut si nécessaire
        customer.setRole("user");
        return customerRepository.save(customer);
    }
}