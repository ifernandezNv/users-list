import { deleteUser } from "./utils"

type DeleteUserModalProps = {
  id: string
}
const DeleteWarningModal = ({id}: DeleteUserModalProps) => {

  return (
    <div>

      <div className='flex items-center justify-center gap-5'>
        <div>
          <p>¿Estás seguro de eliminar este usuario?</p>
          <p>Recuerda que al hacerlo, toda su información se eliminará y no se podrá recuperar</p>
        </div>
        <div className='flex items-center justify-between'>
          <button type='button' className='p-2 rounded text-center font-bold text-slate-800 border '>No, Cancelar</button>
          <button onClick={()=>deleteUser(id)} type='button' className='p-2 rounded text-center font-bold text-white bg-red-800'>Si, Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteWarningModal