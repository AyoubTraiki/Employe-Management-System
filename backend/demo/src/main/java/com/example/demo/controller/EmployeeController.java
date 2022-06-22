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

import com.example.demo.model.Employee;
import com.example.demo.service.EmployeeService;
@CrossOrigin
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	 	@Autowired
	    private EmployeeService employeeService;

	    // GET http://localhost:8080/employee/employees
	    @GetMapping("/employees")
	    public List<Employee> findAllEmployees(){
	        return employeeService.getAllEmployees();
	    }

	    // GET http://localhost:8080/employee/employees/{id}
	    @GetMapping("/employees/{id}")
	    public Employee findEmployeeById(@PathVariable Long id){
	        return employeeService.getEmployeeById(id);
	    }
	    // POST http://localhost:8080/employee/employees
	    @PostMapping("/employees")
	    public String saveEmployee(@RequestBody Employee employee) {
	        // save employee to database
	        employeeService.saveEmployee(employee);
	        return "employee saved";
	    }
	    // Put http://localhost:8080/employee/employees/{id}
	    @PutMapping("employees/{id}")
	    public String updateEmployee(@PathVariable( value = "id") long id,@RequestBody Employee employeeDetails) {
	    	Employee employee = employeeService.getEmployeeById(id);
	    	employee.setFirstname(employeeDetails.getFirstname());
	    	employee.setLastname(employeeDetails.getLastname());
	    	employee.setEmail(employeeDetails.getEmail());
	    	employee.setFunction(employeeDetails.getFunction());
	    	employee.setSalary(employeeDetails.getSalary());
	    	employee.setGrade(employeeDetails.getGrade());
	    	employee.setDatecreation(employeeDetails.getDatecreation());	
	    	employeeService.saveEmployee(employee);
	    	return " Employee updated";
	    }
	    @DeleteMapping("/employees/{id}")
	    public String removeEmployee(@PathVariable Long id){
	        employeeService.deleteEmployee(id);

	        return "Deleted Successfuly";
	    }

}
