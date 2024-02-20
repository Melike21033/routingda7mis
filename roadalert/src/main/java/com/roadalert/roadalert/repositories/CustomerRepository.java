package com.roadalert.roadalert.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.roadalert.roadalert.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Ajoutez des méthodes personnalisées de repository si nécessaire
}