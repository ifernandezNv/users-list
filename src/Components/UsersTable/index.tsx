import { Icon } from '@iconify/react';

import { UserType } from '../../types'
import GenderBadge from '../Badges/GenderBadge';
type UsersTableProps = {
    users: UserType[]
}
const UsersTable = ({users}: UsersTableProps) => {
  return (
    <table className='w-full table-auto'>
        <thead className='border'>
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
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><GenderBadge gender={user.gender}/></td>
                    <td>{user.status}</td>
                    <td className='flex flex-col items-center gap-2'>
                        <button type="button" className='p-2 text-center text-md rounded bg-amber-600 text-slate-900 font-bold'><Icon icon=""/> Editar</button>
                        <button type="button" className='p-2 text-center text-md rounded bg-red-800 text-white font-bold'><Icon icon=""/> Eliminar</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default UsersTable