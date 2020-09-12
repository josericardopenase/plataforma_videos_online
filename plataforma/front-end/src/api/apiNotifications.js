import apiClient from './apiClient'

const getNonReadNotifications = () => apiClient.get(`notificacion/numero/`)

const getNotifications = (id) =>  apiClient.get(`notificacion`)
export default{
    getNonReadNotifications,
    getNotifications ,

}