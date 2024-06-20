import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import EmergencyContainer from './components/containers/EmergencyContainer'
import Team from './components/containers/Team'

function AppRouter() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/emergency' element={<EmergencyContainer/>}/>
        <Route  path='/team' element={<Team/>}/>
     </Routes>
    </div>
  )
}

export default AppRouter
