import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EmergencyContainer from './components/containers/EmergencyContainer'

function AppRouter() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/emergency' element={<EmergencyContainer/>}/>
     </Routes>
    </div>
  )
}

export default AppRouter
