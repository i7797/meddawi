import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import EmergencyContainer from './components/containers/EmergencyContainer'
import Team from './components/containers/Team'
import Services from './components/containers/Services'

function AppRouter() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route  path='/emergency' element={<EmergencyContainer/>}/>
        <Route  path='/team' element={<Team/>}/>
     </Routes>
    </div>
  )
}

export default AppRouter
