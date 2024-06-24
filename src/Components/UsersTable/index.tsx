
import {UserType} from "../../Pages/UsersPage/types"
import GenderBadge from '../Badges/GenderBadge';
import StatusBadge from '../Badges/StatusBadge';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { switchFormModal, switchDeleteWarning, setUserId, setName } from '../../Pages/UsersPage/reducer/usersSlice';
import Button from "../Reusables/Button";
type UsersTableProps = {
    users: UserType[]
}
const UsersTable = ({users}: UsersTableProps) => {
    const dispatch = useAppDispatch()

    const popDeleteWarning = (id: string, name: string)=>{
        dispatch(setUserId(id))
        dispatch(setName(name))
        dispatch(switchDeleteWarning())
    }
    const popFormModal = (id: string)=>{
        dispatch(switchFormModal())
        dispatch(setUserId(id))
    }
  return (
    <table className='w-full table-auto rounded'>
        <thead className='border bg-cyan-800 text-white font-bold'>
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
                <tr key={user.id} className='border text-center'>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><GenderBadge gender={user.gender}/></td>
                    <td><StatusBadge status={user.status}/></td>
                    <td className='flex flex-col items-center gap-2 p-2'>
                        <Button 
                            className=' bg-amber-600 text-slate-900'
                            onClick={ ()=>popFormModal(user.id)}
                            text="Editar"
                            icon="mdi:pencil"
                        />
                        <Button 
                            className=' bg-red-800 text-white'
                            onClick={()=>popDeleteWarning(user.id, user.name)}
                            text="Eliminar"
                            icon="mdi:trash"
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default UsersTable