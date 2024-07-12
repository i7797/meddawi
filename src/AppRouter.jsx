import React, { useState } from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import EmergencyContainer from './components/containers/EmergencyContainer'
import Team from './components/containers/Team'
import Services from './components/containers/Services'
import AskService from './components/containers/AskService'
import AskCare from './components/containers/AskCare'
import ServicesData from './data/ServiceData'

import {Profile} from './Auth/Profile';

import {Login} from './Auth/Login';
import { ConstProvider } from './Auth/Auth';
import RequierAuth from './Auth/RequierAuth'
import Drawer from './components/common/Drawer';
import FinalService from './components/containers/FinalService'
import NurseLayout from './pages/NurseLayout'
import UserType from './components/common/UserType'


function AppRouter() {
  const [data , setData] =useState(ServicesData)
  return (
    <div>
     <ConstProvider>
      
        {/* <Drawer/> */}

        <Routes>
          {/* <Route path='/' element={<UserType/>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/service/:id/:name' element={<AskService/>}/>
          <Route path='/askcare' element={<AskCare/>}/>
          <Route  path='/emergency' element={<EmergencyContainer/>}/>
          <Route path='/nurse' element={<NurseLayout/>}/>

          <Route 
          path="/service" 
          element={
            <RequierAuth>
              {/* <Services /> */}
              {/* <ServiceTwo/> */}
              <FinalService/>
            </RequierAuth>
          } 
        />
        <Route 
          path="/team" 
          element={
            <RequierAuth>
              <Team />
            </RequierAuth>
          } 
        />
          <Route
            path="/profile"
            element={
              <RequierAuth>
                <Profile />
              </RequierAuth>
            }
          />
          <Route path="*" element={<h1>page not found </h1>} />
        </Routes>
      </ConstProvider>
    </div>
  )
}

export default AppRouter
