import axios from "axios"
const BASE_REST_API_URL="http://localhost:8181/investor"
class InvestorService{
    getAllinvestors(){
        return axios.get(BASE_REST_API_URL+"/getall")
    }

    addInvestor(investor){
        return(axios.post(BASE_REST_API_URL+"/add",investor))
    }

    getInvestorById(id){
        return axios.get(BASE_REST_API_URL+"/getone/"+id);
    }

    updateInvestor(id, investor){
        return (axios.put(BASE_REST_API_URL+"/update/"+id,investor));
    }
    deleteInvestor(id){
        return axios.delete(BASE_REST_API_URL+"/delete/"+id);
    }
}
export default new InvestorService();