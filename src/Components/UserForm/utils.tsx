import {UserType} from "../../Pages/UsersPage/types"
import axiosClient from "../../config"
export const createUser = async (user: UserType) =>{
    try {
        await axiosClient.post("/users", user)
        return true
    } catch (error) {
        console.log(error)
    }
}
export const updateUser = async (user: UserType) =>{
    try {
        await axiosClient.put(`/users/${user.id}`, user)
        return true
    } catch (error) {
        console.log(error)
    }
}
export const getUser = async (id: string) =>{
    try {
        const {data} = await axiosClient.get(`/users/${id}`)
        return data
    } catch (error) {
        console.log(error)        
    }
}