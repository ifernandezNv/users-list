import { UserType } from '../../types'
import GenderBadge from '../Badges/GenderBadge';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { switchFormModal, switchDeleteWarning, setUserId } from '../../Pages/UsersPage/reducer/usersSlice';
type UsersTableProps = {
    users: UserType[]
}
const UsersTable = ({users}: UsersTableProps) => {
    const dispatch = useAppDispatch()

    const popDeleteWarning = ()=>{
        dispatch(switchDeleteWarning())
    }
    const popFormModal = (id: string)=>{
        dispatch(switchFormModal())
        dispatch(setUserId(id))
    }
  return (
    <table className='w-full table-auto rounded'>
        <thead className='border bg-indigo-800 text-white font-bold'>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Genero</th>
                <th>Status</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody className='border'>
            {users?.length === 0 ? (
                <p></p>
            ) : users?.map( user => (
                <tr key={user.id} className='border'>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><GenderBadge gender={user.gender}/></td>
                    <td>{user.status}</td>
                    <td className='flex flex-col items-center gap-2 p-2'>
                        <button 
                            type="button" 
                            className='w-full p-2 text-center text-md rounded bg-amber-600 text-slate-900 font-bold'
                            onClick={ ()=>popFormModal(user.id)}
                        >
                            Editar
                        </button>
                        <button 
                            type="button" 
                            className='w-full p-2 text-center text-md rounded bg-red-800 text-white font-bold'
                            onClick={popDeleteWarning}
                        >
                            Eliminar
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default UsersTable