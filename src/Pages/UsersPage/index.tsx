import {useEffect} from "react"

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import UsersTable from "../../Components/UsersTable"
import { setUsers } from "./reducer/usersSlice"
import { getUsers } from "./utils"
import { RootState } from "../../store"

const UsersPage = () => {
  const users = useAppSelector((state: RootState) => state.users.users )

  const dispatch = useAppDispatch()
  useEffect(()=>{
    getUsers().then( values => {
      dispatch(setUsers(values))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      <h2 className="text-slate-800 font-bold text-3xl">Lista de Usuarios</h2>
      <div className='h-1 bg-slate-800 w-full'></div>
      <div className="mt-5 w-full h-[80%] overflow-y-scroll">
        <UsersTable
          users={users}
        />
      </div>
    </>
  )
}

export default UsersPage