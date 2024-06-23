import axiosClient from "../../config"

export const deleteUser = async (id: string) =>{
    try {
        const {data} = await axiosClient.delete(`/users/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}