//Ticket controller
package com.roadalert.roadalert.controllers;


import com.roadalert.roadalert.entities.Ticket;
import com.roadalert.roadalert.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Base64;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tickets")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class TicketController {

    private final TicketService ticketService;

    @Autowired
    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    // Endpoint pour récupérer les tickets d'un utilisateur spécifique
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/utilisateur/{utilisateurId}")
    public ResponseEntity<List<Ticket>> getTicketsByUtilisateurId(@PathVariable Long utilisateurId) {
        List<Ticket> tickets = (List<Ticket>) ticketService.getTicketsByUtilisateurId(utilisateurId);
        return ResponseEntity.ok(tickets);

    }

    // Endpoint pour créer un nouveau ticket
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @PostMapping
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        // Le champ image est déjà une chaîne Base64
        Ticket createdTicket = ticketService.createTicket(ticket);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTicket);
    }


    // Endpoint pour récupérer un ticket par son ID
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {
        Optional<Ticket> optionalTicket = ticketService.getTicketById(id);
        return optionalTicket.map(ticket -> ResponseEntity.ok().body(ticket))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Endpoint pour mettre à jour un ticket existant
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @PutMapping("/{id}")
    public ResponseEntity<Ticket> updateTicket(@PathVariable Long id, @RequestBody Ticket updatedTicket) {
        Ticket updated = ticketService.updateTicket(id, updatedTicket);
        if (updated != null) {
            return ResponseEntity.ok().body(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint pour supprimer un ticket par son ID
    @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
        return ResponseEntity.noContent().build();
    }
}
