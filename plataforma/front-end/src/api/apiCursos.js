import apiClient from './apiClient'

const getListCursos = () => apiClient.get('/cursos/')

const getSingleCurso = (id) => apiClient.get(`/cursos/${id}/`)

const getApartado = (id) =>  apiClient.get(`apartado/${id}/`)
export default{
    getListCursos,
    getSingleCurso,
    getApartado
}