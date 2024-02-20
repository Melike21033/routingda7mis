package com.roadalert.roadalert.services;

import com.roadalert.roadalert.entities.Utilisateur;

import java.util.List;

public interface UtilisateurService {
    Utilisateur findByEmail(String email);
    List<Utilisateur> getAllUtilisateurs();

    Utilisateur changerRoleUtilisateur(Long id, String nouveauRole);

}
