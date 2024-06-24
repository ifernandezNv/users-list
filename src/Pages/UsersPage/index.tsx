import {useEffect, useMemo} from "react"


import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { setUsers, switchFormModal } from "./reducer/usersSlice"
import { getUsers } from "./utils"
import { RootState } from "../../store"
import UsersTable from "../../Components/UsersTable"
import UserForm from "../../Components/UserForm"
import DeleteWarningModal from "../../Components/DeleteWarningModal";
import Button from "../../Components/Reusables/Button";
const UsersPage = () => {
  const users = useAppSelector((state: RootState) => state.users.users )
  const memoizedUsers = useMemo( ()=>{
    return users
  }, [users])

  const showFormModal = useAppSelector((state: RootState) => state.users.showFormModal )
  const showDeleteWarning = useAppSelector((state: RootState) => state.users.showDeleteWarning )

  const dispatch = useAppDispatch()
  useEffect(()=>{
    getUsers().then( values => {
      dispatch(setUsers(values))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-slate-800 font-bold text-3xl">Lista de Usuarios</h2>
        <Button
          className=" bg-cyan-800 text-white"
          onClick ={ ()=>dispatch(switchFormModal()) }
          text="Crear Nuevo Usuario"
          icon="carbon:add-filled"
        />
      </div>
      <div className='h-1 bg-slate-800 w-full'></div>
      <div className="mt-5 w-full h-[100%] md:h-[80%] overflow-y-scroll">
        <UsersTable
          users={memoizedUsers}
        />
      </div>
      {showFormModal && (
        <UserForm/>
      )}
      {showDeleteWarning && (
        <DeleteWarningModal/>
      )}
    </>
  )
}

export default UsersPage