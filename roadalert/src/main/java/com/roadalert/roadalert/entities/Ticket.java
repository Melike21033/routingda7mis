//Ticket entity
package com.roadalert.roadalert.entities;


import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "tickets")
public class Ticket {
	
         @Id
         @GeneratedValue(strategy = GenerationType.IDENTITY)
         @Column
         private Long id;
         @Column
         private String description;
		 @Column(columnDefinition="LONGTEXT") // Utilisez LONGTEXT pour stocker des chaînes plus longues
		 private String image;


	@Column
         private String localisation;
         @Column
         private String status;
         @Column
         private Date date_resolution; // Date de résolution prévue

		 @Column
         private String priority;
		 @Column
		 private Date date_creation;

	public Ticket(Long id, String description, String image, String localisation, String status, Date date_resolution, String priority, Date date_creation, Utilisateur utilisateur) {
		this.id = id;
		this.description = description;
		this.image = image;
		this.localisation = localisation;
		this.status = status;
		this.date_resolution = date_resolution;
		this.priority = priority;
		this.date_creation = date_creation;
		this.utilisateur = utilisateur;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	public Long getId() {
		return id;
	}

	public String getDescription() {
		return description;
	}


	public String getLocalisation() {
		return localisation;
	}

	public String getStatus() {
		return status;
	}

	public Date getDate_resolution() {
		return date_resolution;
	}

	public String getPriority() {
		return priority;
	}

	public Date getDate_creation() {
		return date_creation;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	public void setLocalisation(String localisation) {
		this.localisation = localisation;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setDate_resolution(Date date_resolution) {
		this.date_resolution = date_resolution;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public void setDate_creation(Date date_creation) {
		this.date_creation = date_creation;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public Ticket() {
			super();
			// TODO Auto-generated constructor stub
		}

	@ManyToOne
		@JoinColumn(name = "utilisateur_id", referencedColumnName = "id")
		private Utilisateur utilisateur;
}