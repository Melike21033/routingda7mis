package com.roadalert.roadalert.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "utilisateurs")
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
	private Long id = Long.valueOf(3);

	@Column
    private String nom;
    @Column
    private String email;
    @Column
    private String role;
    @Column
    private String password;
    // Autres attributs de l'utilisateur

    public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Ticket> tickets;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}



	public List<Ticket> getTickets() {
		return tickets;
	}

	public void setTickets(List<Ticket> tickets) {
		this.tickets = tickets;
	}

	public Utilisateur(Long id, String nom, String email, String role, List<Ticket> tickets) {
		super();
		this.id = id;
		this.nom = nom;
		this.email = email;
		this.role = role;
		this.tickets = tickets;
	}

	public Utilisateur() {
		super();
		// TODO Auto-generated constructor stub
	}

}






