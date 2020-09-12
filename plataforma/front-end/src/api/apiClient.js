import { useContext } from "react";
import storage from "../auth/storage";
const { create } = require("apisauce");


const apiClient = create({
    baseURL: 'http://127.0.0.1:8000/api',
})

apiClient.addAsyncRequestTransform(async (request) => {
    const token = await storage.getToken()
    
    if(!token) return;

    request.headers["Authorization"] = `Token ${token}`
} )

export default apiClient