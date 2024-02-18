package com.roadalert.roadalert.services;

 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roadalert.roadalert.entities.Utilisateur;
import com.roadalert.roadalert.repositories.UtilisateurRepository;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Override
    public Utilisateur findByEmail(String email) {
        return utilisateurRepository.findByEmail(email);
    }
}
