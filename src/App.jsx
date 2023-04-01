import React from 'react'
import Navbars from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import routes from "./routes"

const App = () => {
  return (
   <>
   <Navbars/>
   <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} exact />
        })}
      </Routes>
   </>
  )
}

export default App