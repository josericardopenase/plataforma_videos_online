import apiClient from './apiClient'

const getToken = (username, password) => apiClient.post('/auth/token/', {username : username, password: password})

const getUser = () => apiClient.get('/auth/user/')
export default{
   getToken,
   getUser
}