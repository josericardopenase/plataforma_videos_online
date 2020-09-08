const { create } = require("apisauce");

const apiClient = create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {'Authorization' : 'Token 445aebbc7eba7761e30ba299ad06276633b0bc47'}

})

export default apiClient