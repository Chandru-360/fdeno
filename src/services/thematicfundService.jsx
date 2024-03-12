import axios from "axios"

const BASE_REST_API_URL="http://localhost:8181/thematicfund"

class thematicfundService{
    getAllthematicfunds(){
            return axios.get(BASE_REST_API_URL+"/all")
    }

    addthematicfund(id, company){
        return(axios.post(BASE_REST_API_URL+"/add/"+id,company))
    }

    getthematicfundById(id){
        return axios.get(BASE_REST_API_URL+"/one/"+id);
    }

    updatethematicfund(id, thematicfund){
        return (axios.put(BASE_REST_API_URL+"/update/"+id,thematicfund));
    }
    deletethematicfund(id){
        return axios.delete(BASE_REST_API_URL+"/delete/"+id);
    }
}
export default  new thematicfundService();