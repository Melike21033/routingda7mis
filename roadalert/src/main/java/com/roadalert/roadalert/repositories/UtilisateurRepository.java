package com.roadalert.roadalert.repositories;

import com.roadalert.roadalert.entities.Utilisateur;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
    Utilisateur findByEmail(String email);
    Optional<Utilisateur> findById(long id);


}
