package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Freelancer;
import com.example.demo.service.FreelancerService;

@CrossOrigin
@RestController
@RequestMapping("/freelancer")
public class FreelancerController {
	@Autowired
    private FreelancerService freelancerService;

    // GET http://localhost:8080/freelancer/freelancers
    @GetMapping("/freelancers")
    public List<Freelancer> findAllFreelancers(){
        return freelancerService.getAllFreelancers();
    }

    // GET http://localhost:8080/freelancer/freelancers/{id}
    @GetMapping("/freelancers/{id}")
    public Freelancer findFreelancerById(@PathVariable Long id){
        return freelancerService.getFreelancerById(id);
    }
    // POST http://localhost:8080/freelancer/freelancers
    @PostMapping("/freelancers")
    public String saveFreelancer(@RequestBody Freelancer freelancer) {
        // save freelancer to database
    	freelancerService.saveFreelancer(freelancer);
        return "freelancer saved";
    }
    // Put http://localhost:8080/freelancer/freelancers/{id}
    @PutMapping("freelancers/{id}")
    public String updateFreelancer(@PathVariable( value = "id") long id,@RequestBody Freelancer freelancerDetails) {
    	Freelancer freelancer = freelancerService.getFreelancerById(id);
    	freelancer.setFirstname(freelancerDetails.getFirstname());
    	freelancer.setLastname(freelancerDetails.getLastname()); 
    	freelancer.setEmail(freelancerDetails.getEmail());
    	freelancer.setNumtel(freelancerDetails.getNumtel());
    	freelancer.setTypecontract(freelancerDetails.getTypecontract());
    	freelancerService.saveFreelancer(freelancer);
    	return " Freelancer updated";
    }
    @DeleteMapping("/freelancers/{id}")
    public String removeFreelancer(@PathVariable Long id){
        freelancerService.deleteFreelancer(id);

        return "Deleted Successfuly";
    }

}
