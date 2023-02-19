import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import About from './pages/About'
import Developer from './pages/Developer'

import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='developer' element={<Developer />} />
      <Route path='login' element={<LogIn />} />
    </Route>
  ), {
    basename: "/SummerHack2023"
  }
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
