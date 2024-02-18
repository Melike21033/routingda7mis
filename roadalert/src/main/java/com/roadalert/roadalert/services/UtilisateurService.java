package com.roadalert.roadalert.services;

import com.roadalert.roadalert.entities.Utilisateur;

public interface UtilisateurService {
    Utilisateur findByEmail(String email);
}
