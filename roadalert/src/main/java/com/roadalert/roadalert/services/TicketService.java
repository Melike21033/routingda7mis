//Ticket service
package com.roadalert.roadalert.services;



import com.roadalert.roadalert.entities.Ticket;
import com.roadalert.roadalert.repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;

    @Autowired
    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public List<Ticket> getTicketsByUtilisateurId(Long utilisateurId) {
        return ticketRepository.findByUtilisateurId(utilisateurId);
    }

    public Ticket createTicket(Ticket ticket) {
        // Implémentez ici la logique de création du ticket, par exemple la validation des données
        return ticketRepository.save(ticket);
    }

    public Optional<Ticket> getTicketById(Long id) {
        return ticketRepository.findById(id);
    }

    public void deleteTicket(Long id) {
        ticketRepository.deleteById(id);
    }

    public Ticket updateTicket(Long id, Ticket updatedTicket) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(id);
        if (optionalTicket.isPresent()) {
            Ticket ticket = optionalTicket.get();
           
            ticket.setDescription(updatedTicket.getDescription());
            ticket.setDate_resolution(updatedTicket.getDate_resolution());
            ticket.setStatus(updatedTicket.getStatus());
            ticket.setPriority(updatedTicket.getPriority());
            ticket.setDate_creation(updatedTicket.getDate_creation());
            ticket.setImage(updatedTicket.getImage());
            ticket.setLocalisation(updatedTicket.getLocalisation());
            return ticketRepository.save(ticket);
        } else {
            // Gérer le cas où le ticket avec l'ID donné n'existe pas
            return null;
        }
    }
}

