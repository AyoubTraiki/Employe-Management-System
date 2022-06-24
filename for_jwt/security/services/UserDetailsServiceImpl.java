package com.example.demo.security.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.demo.model.User;

public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	@Transactional
	public UserDetails loadUserByUsername(String  username) throws UsernameNotFoundException{
		User user=userRepository.findByUsername(username)
				.orElseThrow(()->new UsernameNotFoundException("User not found with username"+ username));
		return UserDetailsImpl.build(user);
	}

}
