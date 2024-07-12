import React, { useState } from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import EmergencyContainer from './components/containers/EmergencyContainer'
import Team from './components/containers/Team'

import AskService from './components/containers/AskService'
import AskCare from './components/containers/AskCare'
import ServicesData from './data/ServiceData'
import FinalService from './components/containers/FinalService'

import {Profile} from './Auth/Profile';

import {Login} from './Auth/Login';
import { ConstProvider } from './Auth/Auth';
import RequierAuth from './Auth/RequierAuth'
import NurseHome from './pages/NurseHome'
import NurseTeam from './components/containers/NurseTeam'
import NurseProfile from './components/containers/NurseProfile'
import NursePost from './components/containers/NursePost'
import NurseHomeCards from './components/cards/NurseHomeCrad'
import NurseLayout from './pages/NurseLayout'
import NurseStartPage from './pages/NurseStartPage'
import Front from './pages/Front'


function AppRouter() {
  const [data , setData] =useState(ServicesData)
  return (
    <div>
     <ConstProvider>
      

        <Routes>
        <Route path="/" element={<Front/>} />
          <Route path='/nursestartpage' element={<NurseStartPage/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<NurseHomeCards />} />

          <Route path="/nurseteam" element={< NurseTeam/>} />
          <Route path="/nurseprofile" element={<NurseProfile />} />
          <Route path="/nursepost" element={<NursePost />} />

          <Route path="/nurse" element={<NurseHome />} />


          <Route path="/Login" element={<Login />} />
          <Route path='/service/:id/:name' element={<AskService/>}/>
          <Route path='/askcare' element={<AskCare/>}/>
          <Route  path='/emergency' element={<EmergencyContainer/>}/>
          <Route path='/nurse' element={<NurseLayout/>}/>

          <Route 
          path="/service" 
          element={
            <RequierAuth>
              
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
