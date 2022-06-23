package com.example.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Table(name="Freelancers")
public class Freelancer {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="first_name",nullable=false)
	private String firstname;
	@Column(name="last_name",nullable=false)
	private String lastname;
	@Column(name="email",nullable=false)
	private String email;
	@Column(name="num_tel",nullable=false)
	private int numtel;
	@Column(name="contract_type",nullable=false)
	private String typecontract;
}
