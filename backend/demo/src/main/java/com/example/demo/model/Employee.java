package com.example.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor @NoArgsConstructor @Data @Table(name="Employees")
public class Employee {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="first_name",nullable=false)
	private String firstname;
	@Column(name="last_name",nullable=false)
	private String lastname;
	@Column(name="email",nullable=false)
	private String email;
	@Column(name="fuction",nullable=false)
	private String function;
	@Column(name="salary",nullable=false)
	private double salary;
	@Column(name="grade",nullable=false)
	private int grade;
	@Temporal(TemporalType.TIMESTAMP) @CreationTimestamp @Column(name="Date_Creation",nullable=false)
    private Date Datecreation;

	
}
