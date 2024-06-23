import {useState} from "react"

import { deleteUser } from "./utils"
import { RootState } from "../../store"
import { AlertInfoType } from "../../types"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { setUsers, switchDeleteWarning } from "../../Pages/UsersPage/reducer/usersSlice"
import { getUsers } from "../../Pages/UsersPage/utils"
import Alert from "../Alerts/Alert"

const DeleteWarningModal = () => {
  const [alert, setAlert] = useState<AlertInfoType>({} as AlertInfoType)
  const userId = useAppSelector((state: RootState) => state.users.userId )
  const showAlert = useAppSelector((state: RootState) => state.users.showAlert )
  const dispatch = useAppDispatch()

  const deleteUserFunction = async ()=>{
    const result = await deleteUser(userId)
    if(result){
      setAlert({
        message: "User deleted successfully",
        type: "error"
      })
      const result = await getUsers()
      dispatch(setUsers(result))
    }
  }
  const closeModal = ()=>{
    dispatch(switchDeleteWarning())
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {showAlert && (
        <Alert
          message={alert.message}
          type={alert.type}
        />
      )}
      <div className='flex flex-col items-center justify-center gap-5 bg-white p-5 rounded'>
        <div>
          <p className="font-bold text-lg text-center">¿Estás seguro de eliminar este usuario?</p>
          <p>Recuerda que al hacerlo, toda su información se eliminará y no se podrá recuperar</p>
        </div>
        <div className='w-[100%] flex items-center justify-between'>
          <button 
            type='button' 
            className='p-2 rounded text-center font-bold text-slate-800 border'
            onClick={closeModal}
          >
            No, Cancelar
          </button>
          <button 
            onClick={deleteUserFunction} 
            type='button' 
            className='p-2 rounded text-center font-bold text-white bg-red-800'
          >
            Si, Eliminar 
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteWarningModal