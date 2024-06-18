import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function AppRouter() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  )
}

export default AppRouter
