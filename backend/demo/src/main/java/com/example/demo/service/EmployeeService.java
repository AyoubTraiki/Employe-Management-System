package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.EmployeeRepository;
import com.example.demo.model.Employee;

@Service
public class EmployeeService {
		@Autowired
	    private EmployeeRepository employeeRepository;
	    public List<Employee> getAllEmployees(){
	      return employeeRepository.findAll();
	    };

	    public Employee getEmployeeById(Long id){
	        return employeeRepository.findById(id).get();
	    };

	    public void saveEmployee(Employee e){
	    	employeeRepository.save(e);
	    }

	    public void deleteEmployee(Long e){
	    	employeeRepository.deleteById(e);
	    }

}
