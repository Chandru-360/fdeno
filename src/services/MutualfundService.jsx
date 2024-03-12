import axios from "axios"

const BASE_REST_API_URL="http://localhost:8181/mutualfund"

class CompanyService{
    getAllmutualfunds(){
            return axios.get(BASE_REST_API_URL+"/all")
    }

    addMutualfund(id, company){
        return(axios.post(BASE_REST_API_URL+"/add/"+id,company))
    }

    getMutualfundById(id){
        return axios.get(BASE_REST_API_URL+"/one/"+id);
    }

    updateMutualfund(id, mutualfund){
        return (axios.put(BASE_REST_API_URL+"/update/"+id,mutualfund));
    }
    deleteMutualfund(id){
        return axios.delete(BASE_REST_API_URL+"/delete/"+id);
    }
}
export default  new CompanyService();