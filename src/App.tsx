import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Layout from "./Components/Layout"
import UsersPage from "./Pages/UsersPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<UsersPage/>} />
      </Route>
    )
  )  
  return (
    <RouterProvider router={router} />
  )
}

export default App
