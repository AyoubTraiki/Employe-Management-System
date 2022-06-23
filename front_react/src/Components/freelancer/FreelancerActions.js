import axios from 'axios';


const Freelancer_base_url="http://localhost:8080/freelancer/freelancers";

class FreelancerActions  {

    getFreelancers(){
        return axios.get(Freelancer_base_url);
    }
    saveFreelancer(freelancer){
        return axios.post(Freelancer_base_url,freelancer);
    }
    findFreelancerById(freelancerId){
        return axios.get(Freelancer_base_url + '/' + freelancerId);
    }
    updateFreelancer(freelancer, freelancerId){
        return axios.put(Freelancer_base_url + '/' + freelancerId, freelancer);
    }
    removeFreelancer(freelancerId){
        return axios.delete(Freelancer_base_url + '/' + freelancerId);
    }
  
}
export default new FreelancerActions()
