import {FormEvent, useEffect, useState} from 'react'

import {  AlertInfoType, AlertType } from '../../types'
import { validateEmail } from '../../utils/regex'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import {UserType, GenderEnum, StatusEnum} from "../../Pages/UsersPage/types"
import { switchFormModal, setUsers, setUserId } from '../../Pages/UsersPage/reducer/usersSlice'
import { getUsers } from '../../Pages/UsersPage/utils';
import { switchAlert, switchLoading } from '../../Pages/WelcomePage/reducer/generalSlice'
import { RootState } from '../../store'
import { createUser, getUser, updateUser } from './utils';
import Alert from '../Alert';
import LoadingSpinner from '../LoadingSpinner';
import Button from '../Reusables/Button';
const UserForm = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [gender, setGender] = useState<GenderEnum>("female")
  const [status, setStatus] = useState<StatusEnum>("inactive")
  const [alert, setAlert] = useState<AlertInfoType>()
  const userId = useAppSelector((state: RootState) => state.users.userId )
  const showAlert = useAppSelector((state: RootState) => state.general.showAlert )
  const loading = useAppSelector((state: RootState) => state.general.loading )
  const dispatch = useAppDispatch()
  
  const closeModal = ()=>{
    setName("")
    setEmail("")
    setGender("female")
    setStatus("inactive")
    dispatch(setUserId(""))
    dispatch(switchFormModal())
  }
  const getUserInformation = async ()=>{
    const user: UserType = await getUser(userId)
    setName(user?.name)
    setEmail(user?.email)
    setGender(user?.gender)
    setStatus(user?.status)
  }
  const showAndHideAlert = ()=>{
    dispatch(switchAlert())
      setTimeout(() => {
        dispatch(switchAlert())
      }, 2000);
  }

  const updateUsersAndHideAlert = async ()=>{
    const result = await getUsers()
    setTimeout(() => {
      dispatch(switchAlert())
      dispatch(setUsers(result))
      closeModal()
    }, 2000);
  }

  const handleSubmit = async (e: FormEvent)=>{
    e.preventDefault()
    if(Object.values([name, email, gender]).includes("")){
      setAlert({
        message: "Todos los campos son obligatorios",
        type: "error"
      })
      showAndHideAlert()
      return
    }
    if(!validateEmail(email)){
      setAlert({
        message: "El email debe de contar con el siguiente formato: email@dominio.com",
        type: "error"
      })
      showAndHideAlert()
      return
    }
    if(userId){
      dispatch(switchLoading())
      const result = await updateUser({id: userId, name, email, gender, status}).finally( ()=>dispatch(switchLoading()) )
      if(result){
        setAlert({
          message: "Usuario Actualizado Correctamente",
          type: "success"
        })
        dispatch(switchAlert())
        updateUsersAndHideAlert()
      }else{
        setAlert({
          message: "Ocurrió un error al intentar actualizar este registro",
          type: "error"
        })
        showAndHideAlert()
      }
      return
    }
    dispatch(switchLoading())
    const result = await createUser({id: "",name, email, gender, status: "inactive"}).finally( ()=>dispatch(switchLoading()) )
    if(result){
      setAlert({
        message: "Usuario Creado Correctamente",
        type: "success"
      })
      dispatch(switchAlert())
      updateUsersAndHideAlert()
    }else{
      setAlert({
        message: "Ocurrió un error al intentar crear este registro",
        type: "error"
      })
      showAndHideAlert()
    }
  }
  useEffect( ()=>{
    if(userId?.length >0){
      dispatch(switchLoading())
      getUserInformation().finally( ()=>dispatch(switchLoading()) )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId] )
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className='bg-white p-6 shadow w-1/2'>
        <p className='text-2xl font-bold text-center'>{userId.length <= 0 ? "Crear Usuario" : "Actualizar Usuario"}</p>
        <div className='flex flex-col gap-3 my-3'>
          {loading && (
            <LoadingSpinner/>
          )}
          {showAlert && !loading && (
            <Alert
              message={alert?.message as string}
              type={alert?.type as AlertType}
            />
          )}
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Nombre:</label>
            <input 
              type="text" 
              value={name}
              id="name"
              placeholder="Name: Juan García"
              onChange={(e)=>setName(e.target.value)}
              className='p-2 border'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email:</label>
            <input 
              type="text" 
              value={email}
              id="email"
              placeholder="Email: email@email.com"
              onChange={(e)=>setEmail(e.target.value)}
              className='p-2 border'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="gender">Género:</label>
            <select 
              value={gender} 
              id="gender"
              onChange={ (e)=>setGender(e.target.value as GenderEnum ) }
              className='p-2 border'
            >
              <option value="">-- Select a gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {userId && (
            <div className='flex flex-col gap-2'>
              <label htmlFor="status">Status:</label>
              <select 
                value={status} 
                id="status"
                onChange={ (e)=>setStatus(e.target.value as StatusEnum ) }
                className='p-2 border'
              >
                <option value="">-- Select a gender --</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          )}
          <div className='flex items-center justify-between'>
            <Button 
              onClick={closeModal} 
              text="Cancelar" 
              className='border border-indigo-900 p-2 rounded'
            />
            <input 
              type="submit" 
              value={userId.length <= 0 ? "Crear Nuevo Usuario" : "Guardar Cambios"} 
              className='cursor-pointer bg-cyan-800 p-2 text-white font-bold rounded'
            />
          </div>
        </div>
      </form>
      <div className='absolute w-10 bottom-[10%] right-[50%]'>
        <Button 
          onClick={closeModal} 
          icon="gridicons:cross-circle" 
          className='text-white' 
          text=""
          height={40}
        />
      </div>
    </div>
  )
}

export default UserForm