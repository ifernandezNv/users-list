import {FormEvent, useState} from 'react'

import { Icon } from '@iconify/react';

import { GenderEnum, AlertInfoType, AlertType } from '../../types'
import { validateEmail } from '../../utils/regex'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { switchFormModal, switchAlert, setUsers, setUserId } from '../../Pages/UsersPage/reducer/usersSlice'
import { RootState } from '../../store'
import Alert from '../Alerts/Alert';
import { createUser } from './utils';
import { getUsers } from '../../Pages/UsersPage/utils';
const UserForm = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [gender, setGender] = useState<GenderEnum>("female")
  const [alert, setAlert] = useState<AlertInfoType>()
  const userId = useAppSelector((state: RootState) => state.users.userId )
  const showAlert = useAppSelector((state: RootState) => state.users.showAlert )
  const dispatch = useAppDispatch()

  const closeModal = ()=>{
    setName("")
    setEmail("")
    setGender("female")
    setUserId("")
    dispatch(switchFormModal())
  }
  const handleSubmit = async (e: FormEvent)=>{
    e.preventDefault()
    if(Object.values([name, email, gender]).includes("")){
      setAlert({
        message: "All fields are required",
        type: "error"
      })
      dispatch(switchAlert())
      setTimeout(() => {
        dispatch(switchAlert())
      }, 3000);
      return
    }
    if(!validateEmail(email)){
      setAlert({
        message: "Email should follow this format: email@domain.com",
        type: "error"
      })
      dispatch(switchAlert())
      setTimeout(() => {
        dispatch(switchAlert())
      }, 3000);
      return
    }
    if(userId){
      console.log("Actualizar usuario")
      return
    }
    const result = await createUser({id: "",name, email, gender, status: "inactive"})
    if(result){
      setAlert({
        message: "User created successfully",
        type: "success"
      })
      dispatch(switchAlert())
      const result = await getUsers()
      setTimeout(() => {
        dispatch(switchAlert())
        dispatch(setUsers(result))
        closeModal()
      }, 3000);
    }
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className='bg-white p-6 shadow w-1/2'>
        <p className='text-2xl font-bold text-center'>{userId.length <= 0 ? "Create a New User" : "Update User"}</p>
        <div className='flex flex-col gap-3'>
          {showAlert && (
            <Alert
              message={alert?.message as string}
              type={alert?.type as AlertType}
            />
          )}
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              value={name}
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
              placeholder="Email: email@email.com"
              onChange={(e)=>setEmail(e.target.value)}
              className='p-2 border'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="gender">Gender:</label>
            <select 
              value={gender} 
              onChange={ (e)=>setGender(e.target.value as GenderEnum ) }
              className='p-2 border'
            >
              <option value="">-- Select a gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='flex items-center justify-between'>
          <button onClick={closeModal} className='border border-indigo-900 p-2 rounded'>
            Cancelar
          </button>
            <input 
              type="submit" 
              value={userId.length <= 0 ? "Create a New User" : "Save Changes"} 
              className='cursor-pointer bg-indigo-800 p-2 text-white font-bold rounded'
            />
          </div>
        </div>
      </form>
      <div className='absolute w-10 bottom-[10%] right-[50%]'>
        <button onClick={closeModal}>
          <Icon icon="gridicons:cross-circle" height={40} className='text-white'/>
        </button>
      </div>
    </div>
  )
}

export default UserForm