import {useState} from "react"

import {Icon} from "@iconify/react"

import { RootState } from "../../store"
import { deleteUser } from "./utils"
import { AlertInfoType } from "../../types"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { setUsers, switchDeleteWarning, setUserId } from "../../Pages/UsersPage/reducer/usersSlice"
import { switchAlert, switchLoading } from "../../Pages/WelcomePage/reducer/generalSlice"
import { getUsers } from "../../Pages/UsersPage/utils"
import Alert from "../Alert"
import LoadingSpinner from "../LoadingSpinner"
import Button from "../Reusables/Button"
const DeleteWarningModal = () => {
  const [alert, setAlert] = useState<AlertInfoType>({} as AlertInfoType)
  const userId = useAppSelector((state: RootState) => state.users.userId )
  const name = useAppSelector((state: RootState) => state.users.name )
  const showAlert = useAppSelector((state: RootState) => state.general.showAlert )
  const loading = useAppSelector((state: RootState) => state.general.loading )
  const dispatch = useAppDispatch()
  const deleteUserFunction = async ()=>{
    dispatch(switchLoading())
    const result = await deleteUser(userId)
    if(result){
      setAlert({
        message: "Usario Eliminado Correctamente",
        type: "success"
      })
      dispatch(switchAlert())
      const result = await getUsers().finally( ()=>dispatch(switchLoading()) )
      dispatch(setUsers(result))
      setTimeout(() => {
        dispatch(switchAlert())
        closeModal()
      }, 2000);
    }
  }
  const closeModal = ()=>{
    dispatch(setUserId(""))
    dispatch(switchDeleteWarning())
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className='flex flex-col items-center justify-center gap-5 bg-white p-5 rounded'>
        {loading && (
          <LoadingSpinner/>
        )}
        {showAlert && !loading && (
          <Alert
            message={alert.message}
            type={alert.type}
          />
        )}
        <div className="flex flex-col items-center gap-2">
          <Icon 
            height={50} 
            icon="ri:alert-fill" 
            color="#D97706"
          />
          <p className="font-bold text-lg">¿Estás seguro de eliminar este usuario? <span className="font-light">{userId}</span></p>
          <p>Recuerda que al hacerlo, toda su información se eliminará y no la podremos recuperar</p>
          <p className="text-lg">Usuario a eliminar: <span className="font-bold">{name}</span></p>
        </div>
        <div className='w-[100%] flex items-center justify-between'>
          <Button 
            className=' text-slate-800 border'
            onClick={closeModal}
            text="No, Cancelar"
          />
          <Button 
            onClick={deleteUserFunction}  
            className=' bg-red-800 text-white'
            text="Si, Eliminar"
          />
        </div>
      </div>
    </div>
  )
}

export default DeleteWarningModal