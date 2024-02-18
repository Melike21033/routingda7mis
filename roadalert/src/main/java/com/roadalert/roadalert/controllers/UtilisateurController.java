package com.roadalert.roadalert.controllers;

import com.roadalert.roadalert.entities.Utilisateur;
import com.roadalert.roadalert.services.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/utilisateurs") // Endpoint pour les utilisateurs
public class UtilisateurController {

    private final UtilisateurService utilisateurService;

    @Autowired
    public UtilisateurController(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }

    // Endpoint pour rechercher un utilisateur par son adresse e-mail
    @GetMapping("/findByEmail")
    public ResponseEntity<Utilisateur> findByEmail(@RequestParam String email) {
        Utilisateur utilisateur = utilisateurService.findByEmail(email);
        if (utilisateur != null) {
            return ResponseEntity.ok(utilisateur);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
