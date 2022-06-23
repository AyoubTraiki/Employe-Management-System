package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Departement;
import com.example.demo.repository.DepartementRepository;

@Service
public class DepartementService {
	@Autowired
    private DepartementRepository departementRepository;
    public List<Departement> getAllDepartements(){
      return departementRepository.findAll();
    };

    public Departement getDepartementById(Long id){
        return departementRepository.findById(id).get();
    };

    public void saveDepartement(Departement e){
    	departementRepository.save(e);
    }

    public void deleteDepartement(Long e){
    	departementRepository.deleteById(e);
    }

}
