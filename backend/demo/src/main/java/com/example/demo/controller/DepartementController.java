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

import com.example.demo.model.Departement;
import com.example.demo.service.DepartementService;

@CrossOrigin
@RestController
@RequestMapping("/departement")
public class DepartementController {
	@Autowired
    private DepartementService departementService;

    // GET http://localhost:8080/departement/departements
    @GetMapping("/departements")
    public List<Departement> findAllDepartements(){
        return departementService.getAllDepartements();
    }

    // GET http://localhost:8080/departement/departements/{id}
    @GetMapping("/departements/{id}")
    public Departement findDepartementById(@PathVariable Long id){
        return departementService.getDepartementById(id);
    }
    // POST http://localhost:8080/departement/departements
    @PostMapping("/departements")
    public String saveDepartement(@RequestBody Departement departement) {
        // save departement to database
        departementService.saveDepartement(departement);
        return "Departement saved";
    }
    // Put http://localhost:8080/departement/departements/{id}
    @PutMapping("departements/{id}")
    public String updateDepartement(@PathVariable( value = "id") long id,@RequestBody Departement departementDetails) {
    	Departement departement = departementService.getDepartementById(id);
    	departement.setCodedepartement(departementDetails.getCodedepartement());
    	departement.setNamedepartement(departementDetails.getNamedepartement());
    	departement.setNbremployee(departementDetails.getNbremployee());
    	departementService.saveDepartement(departement);
    	return " Departement updated";
    }
    @DeleteMapping("/departements/{id}")
    public String removeDepartement(@PathVariable Long id){
        departementService.deleteDepartement(id);

        return "Deleted Successfuly";
    }

}
