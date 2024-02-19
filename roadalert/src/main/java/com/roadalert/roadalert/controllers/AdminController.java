package com.roadalert.roadalert.controllers;

import com.roadalert.roadalert.entities.Utilisateur;
import com.roadalert.roadalert.services.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final UtilisateurService utilisateurService;

    @Autowired
    public AdminController(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }

    @GetMapping("/utilisateurs")
    public ResponseEntity<List<Utilisateur>> getAllUtilisateurs() {
        List<Utilisateur> utilisateurs = utilisateurService.getAllUtilisateurs();
        return ResponseEntity.ok(utilisateurs);
    }

    @PutMapping("/utilisateurs/{id}/changerRole")
    public ResponseEntity<Utilisateur> changerRoleUtilisateur(@PathVariable Long id, @RequestParam String nouveauRole) {
        Utilisateur utilisateur = utilisateurService.changerRoleUtilisateur(id, nouveauRole);
        return ResponseEntity.ok(utilisateur);
    }
}
