package com.roadalert.roadalert.controllers;

import com.roadalert.roadalert.entities.AuthRequest;
import com.roadalert.roadalert.entities.LoginResponse;
import com.roadalert.roadalert.entities.Utilisateur;
import com.roadalert.roadalert.services.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")

@RestController
public class AuthController {

    private final UtilisateurService utilisateurService;

    @Autowired
    public AuthController(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        // Vérifiez les informations d'identification de l'utilisateur dans la base de données
        Utilisateur utilisateur = utilisateurService.findByEmail(request.getEmail());

        if (utilisateur.getRole().equals("user")) {
            LoginResponse response = new LoginResponse();
            response.setRole("user");
            response.setId(utilisateur.getId());

            // Ajoutez d'autres données au besoin
            return ResponseEntity.ok(response);
        } else if (utilisateur.getRole().equals("admin")) {
            LoginResponse response = new LoginResponse();
            response.setRole("admin");
            // Ajoutez d'autres données au besoin
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body("Rôle non autorisé");
        }
    }

}
