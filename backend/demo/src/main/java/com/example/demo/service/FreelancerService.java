package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Freelancer;
import com.example.demo.repository.FreelancerRepository;


@Service
public class FreelancerService {
	
	@Autowired
    private FreelancerRepository freelancerRepository;
    public List<Freelancer> getAllFreelancers(){
      return freelancerRepository.findAll();
    };

    public Freelancer getFreelancerById(Long id){
        return freelancerRepository.findById(id).get();
    };

    public void saveFreelancer(Freelancer f){
    	freelancerRepository.save(f);
    }

    public void deleteFreelancer(Long f){
    	freelancerRepository.deleteById(f);
    }

}
