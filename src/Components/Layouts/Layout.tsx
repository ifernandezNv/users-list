import { Outlet } from 'react-router-dom'

import Sidebar from '../Sidebar'
const Layout = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-10 min-h-screen'>
        <Sidebar/>
        <main className='w-[80%] h-screen py-10'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout