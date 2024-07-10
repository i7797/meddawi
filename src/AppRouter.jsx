import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import EmergencyContainer from './components/containers/EmergencyContainer'
import Team from './components/containers/Team'
import Services from './components/containers/Services'
import AskService from './components/containers/AskService'
import AskCare from './components/containers/AskCare'

import {Profile} from './Auth/Profile';

import {Login} from './Auth/Login';
import { ConstProvider } from './Auth/Auth';
import RequierAuth from './Auth/RequierAuth'
import Drawer from './components/common/Drawer';
import NurseHome from './pages/NurseHome'
import NurseTeam from './components/containers/NurseTeam'
import NurseProfile from './components/containers/NurseProfile'
import NursePost from './components/containers/NursePost'
import NurseHomeCards from './components/cards/NurseHomeCrad'


function AppRouter() {
  return (
    <div>
     <ConstProvider>
      
        <Drawer/>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<NurseHomeCards />} />

          <Route path="/nurseteam" element={< NurseTeam/>} />
          <Route path="/nurseprofile" element={<NurseProfile />} />
          <Route path="/nursepost" element={<NursePost />} />

          <Route path="/nursepost" element={<NurseHome />} />


          <Route path="/Login" element={<Login />} />
          <Route path='/askservice' element={<AskService/>}/>
          <Route path='/askcare' element={<AskCare/>}/>
          <Route  path='/emergency' element={<EmergencyContainer/>}/>
   

          <Route 
          path="/service" 
          element={
            <RequierAuth>
              <Services />
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
