import axios from 'axios';


const Employee_base_url="http://localhost:8080/employee/employees";

class EmployeeActions  {

    getEmployees(){
        return axios.get(Employee_base_url);
    }
    saveEmployee(employee){
        return axios.post(Employee_base_url,employee);
    }
    findEmployeeById(employeeId){
        return axios.get(Employee_base_url + '/' + employeeId);
    }
    updateEmployee(employee, employeeId){
        return axios.put(Employee_base_url + '/' + employeeId, employee);
    }
    removeEmployee(employeeId){
        return axios.delete(Employee_base_url + '/' + employeeId);
    }
  
}
export default new EmployeeActions()
