import axiosClient from "../../config"

export const deleteUser = async (id: string) =>{
    try {
        await axiosClient.delete(`/users/${id}`)
        return true
    } catch (error) {
        console.log(error)
    }
}