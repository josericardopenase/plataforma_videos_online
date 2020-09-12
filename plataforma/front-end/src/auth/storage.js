const storeToken = async authToken => {
    try {
        await localStorage.setItem('token' , authToken)
    } catch(error){
        console.log('Error storing the auth token', error)
    }
}

const getToken = async () => {
    try {
        const token =await localStorage.getItem('token')
        console.log(token.Authen)
        return token
        
    } catch(error) {
        console.log('Error getting the auth token', error)
    }
}

const removeToken = async() => {
    try {
        await localStorage.removeItem('token')

    }catch(error){
        console.log("Error removing the auth token", error)
    }
    
}

export default  {storeToken, getToken, removeToken}