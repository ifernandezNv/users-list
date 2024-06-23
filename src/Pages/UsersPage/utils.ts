import axiosClient from "../../config"

export const getUsers = async ()=>{
    try {
        const {data} = await axiosClient.get("/users")
        return data
    } catch (error) {
        console.log(error)        
    }
}