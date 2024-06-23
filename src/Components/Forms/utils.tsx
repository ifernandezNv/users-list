import { UserType } from "../../types"
import axiosClient from "../../config"
export const createUser = async (user: UserType) =>{
    console.log(user)
    try {
        const {data} = await axiosClient.post("/users", user)
        console.log(data)
        return true
    } catch (error) {
        console.log(error)
    }
}