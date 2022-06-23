import axios from 'axios';


const Departement_base_url="http://localhost:8080/departement/departements";

class DepartementActions  {

    getDepartements(){
        return axios.get(Departement_base_url);
    }
    saveDepartement(departement){
        return axios.post(Departement_base_url,departement);
    }
    findDepartementById(departementId){
        return axios.get(Departement_base_url + '/' + departementId);
    }
    updateDepartement(departement, departementId){
        return axios.put(Departement_base_url + '/' + departementId, departement);
    }
    removeDepartement(departementId){
        return axios.delete(Departement_base_url + '/' + departementId);
    }
  
}
export default new DepartementActions()
