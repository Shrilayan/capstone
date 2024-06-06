import axios from "axios";

const USER_API_BASE_URL = "http://localhost:7077/api/user/";

export const getAllUsers = () => {
   return axios.get(USER_API_BASE_URL);
}

export const createUser = (userObject) => {
   return axios.post(USER_API_BASE_URL+'register', userObject);
}

export const getUserByUserName = (username) => {
    return axios.post(USER_API_BASE_URL + username);
}

//export const updateEmployee = (employeeId, employee) => {
    //return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
//}

//export const deleteEmployee = (employeeId) => {
    //return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//}