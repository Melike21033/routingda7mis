package com.roadalert.roadalert.services;

 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roadalert.roadalert.entities.Utilisateur;
import com.roadalert.roadalert.repositories.UtilisateurRepository;

 import java.util.List;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Override
    public Utilisateur findByEmail(String email) {
        return utilisateurRepository.findByEmail(email);
    }

    @Override
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }

    @Override
    public Utilisateur changerRoleUtilisateur(Long id, String nouveauRole) {
        Utilisateur utilisateur = utilisateurRepository.findById(id).orElse(null);
        if (utilisateur != null) {
            utilisateur.setRole(nouveauRole);
            utilisateurRepository.save(utilisateur);
        }
        return utilisateur;
    }
}
