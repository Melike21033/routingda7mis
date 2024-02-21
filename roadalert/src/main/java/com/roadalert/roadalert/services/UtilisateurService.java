package com.roadalert.roadalert.services;

import com.roadalert.roadalert.entities.Utilisateur;

import java.util.List;
import java.util.Optional;

public interface UtilisateurService {
    Utilisateur findByEmail(String email);
    List<Utilisateur> getAllUtilisateurs();
    Utilisateur changerRoleUtilisateur(Long id, String nouveauRole);
    Optional<Utilisateur> findById(long id);

}
