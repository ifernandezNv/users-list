import { Link, useLocation } from 'react-router-dom'

import { useAppDispatch } from '../../hooks/reduxHooks'
import { switchFormModal } from '../../Pages/UsersPage/reducer/usersSlice'
const Sidebar = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const showUsersForm = ()=>{
    dispatch(switchFormModal())
  }
  
  return (
    <aside className='flex flex-col items-center justify-center gap-5 py-5 md:p-0 w-full md:w-1/6 bg-indigo-800 md:h-screen text-white'>
        <Link to={"/"} className='font-bold text-4xl text-center'>Lista de Usuarios </Link>
        <nav className='flex flex-col items-center gap-2'>
          <Link to="/" className="font-md text-lg">Administar Usuarios</Link>
          <div className={`${location.pathname === "/users" ? "rounded-full bg-white p-2" : "hidden"}`}></div>
          <button type="button" onClick={showUsersForm} className="font-md text-lg">Crear Nuevo Usuario</button>
          <div className={`${location.pathname === "/users/create" ? "rounded-full bg-white p-2" : "hidden"}`}></div>
        </nav>
    </aside>
  )
}

export default Sidebar