import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  return (
    <aside className='flex flex-col items-center justify-center gap-5 py-5 md:p-0 w-full md:w-1/6 bg-indigo-800 md:h-screen text-white'>
        <Link to={"/home"} className='font-bold text-3xl'>Users List</Link>
        <nav className='flex flex-col items-center gap-2'>
          <Link to="/users" className="font-bold text-lg">Manage Users</Link>
          <div className={`${location.pathname === "/users" ? "rounded-full bg-white p-2" : "hidden"}`}></div>
          <Link to="/users/create" className="font-bold text-lg">Create a New User</Link>
          <div className={`${location.pathname === "/users/create" ? "rounded-full bg-white p-2" : "hidden"}`}></div>
        </nav>
    </aside>
  )
}

export default Sidebar