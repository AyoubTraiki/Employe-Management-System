package com.example.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Table(name="Departements")
public class Departement {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="code_departement",nullable=false)
	private String codedepartement;
	@Column(name="name_departement",nullable=false)
	private String namedepartement;
	@Column(name="nbr_employee",nullable=false)
	private int nbremployee;


}
