import {FormEvent, useState} from 'react'

import { GenderEnum } from '../../types'
import { validateEmail } from '../../utils/regex'
const UserForm = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [gender, setGender] = useState<GenderEnum>()

  const handleSubmit = (e: FormEvent)=>{
    e.preventDefault()
    if(Object.values([name, email, gender]).includes("")){
      console.log("Todos los campos son obligatorios")
      return
    }
    if(!validateEmail(email)){
      console.log("El correo debe de seguir este formato: correo@correo.com")
      return
    }

  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className='bg-white p-4 shadow'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              value={name}
              placeholder="Name: Juan García"
              onChange={(e)=>setName(e.target.value)}
              className='p-2 border'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              value={email}
              placeholder="Email: email@email.com"
              onChange={(e)=>setEmail(e.target.value)}
              className='p-2 border'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="gender">Gender</label>
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
          <div className='flex items-center'>
            <input type="button" value="Create New User" className='bg-indigo-800 text-white font-bold rounded w-[80%]'/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserForm