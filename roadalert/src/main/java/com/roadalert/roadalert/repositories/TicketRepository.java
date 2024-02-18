package com.roadalert.roadalert.repositories;


import com.roadalert.roadalert.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findByUtilisateurId(Long utilisateurId);
}

