package com.example.demo.payload.reponse;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;

import com.example.demo.model.Employee;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor @NoArgsConstructor @Data
public class JwtResponse {
	private String token;
	private String type="bearer";
	private Long id;
	private String username;
	private String email;
	private List<String> roles;

}
