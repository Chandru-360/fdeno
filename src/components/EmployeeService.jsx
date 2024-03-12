import axios from 'axios'
const BASE_URL = "http://localhost:8081/api/v1/employees"
class EmployeeService {
    //FETCHED THE EMPLOYEE ARRAY OF OBJECTS
    getallemployees() {
        return axios.get(BASE_URL)
    }
    //POSTS The EMPLOYEE OBJECT
    createemployee(employeeobj) {
        return axios.post(BASE_URL, employeeobj)
    }
    //get the employee object based on id. For displaying details in updATE EMPLOYEE FORM
    getemployeebyid(employeeId) {
 
        return axios.get(BASE_URL + '/' + employeeId)
    }
    updateEmployee(employeeId,employeeObj){
        return axios.put(BASE_URL+'/'+employeeId,employeeObj)
 
    }
    deleteEmployee(employeeId){
        return axios.delete(BASE_URL+'/'+employeeId)
    }
    saveUserRegistration(user){
        console.log("user object being send to register api"+JSON.stringify(user))
        return axios.post('http://localhost:8081/api/authenticate/register',user)
    }
    userlogin(user){
        console.log("user object being send to login api"+JSON.stringify(user))
        return axios.post('http://localhost:8081/api/authenticate/login',user)
 
    }
}
export default new EmployeeService();