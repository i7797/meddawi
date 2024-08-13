import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'; 
import AboutUs from './pages/AboutUs.jsx'; 


import EmergencyContainer from './components/containers/EmergencyContainer.jsx'; 
import Team from './components/containers/Team.jsx'; 
import AskService from './components/containers/AskService.jsx'; 
import AskCare from './components/containers/AskCare.jsx'; 
import FinalService from './components/containers/FinalService.jsx';
import NurseHome from './pages/NurseHome.jsx'; 
import NurseTeam from './components/containers/NurseTeam.jsx'; 
import NurseProfile from './components/containers/NurseProfile.jsx';
import NursePost from './components/containers/NursePost.jsx';
import NurseLayout from './pages/NurseLayout.jsx'; 
import NurseStartPage from './pages/NurseStartPage.jsx'; 
import Signup from './Sign/SignUp.jsx';
import Signin from './Sign/SignIn.jsx';
import Profile from './Sign/Profile.jsx'
import { AuthProvider } from "./Sign/AuthContext.jsx";


import Footerr from './Footerr.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx';
import EmergencyData from './components/Dashboard/EmergencyData.jsx';

function App() {
  
    return (
    <div>
  
  <div>
    </div> 

       <AuthProvider> 
  <Router>
   
        <Routes>

          <Route path="/signin" element ={<Signin/>}/>
          <Route path="/signup" element ={<Signup/>}/>
          <Route path="/signup" element ={< Footerr />}/>

          <Route path="/aboutUs" element ={< AboutUs />}/>

          <Route path='/nursestartpage' element={<NurseStartPage/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={ <FinalService /> } />
          
        

          <Route path="/nurseteam" element={< NurseTeam/>} />
          <Route path="/nurseprofile" element={<NurseProfile />} />
          <Route path="/nursepost" element={<NursePost />} />

          <Route path="/nurse" element={<NurseHome />} />
         


          <Route path="/profile" element={<Profile />} />

        
          <Route path='/askservice' element={<AskService/>}/>
          <Route path='/askcare' element={<AskCare/>}/>
          <Route  path='/emergency' element={<EmergencyContainer/>}/>
          <Route path='/nurse' element={<NurseLayout/>}/>

          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/emergencyData' element={<EmergencyData/>}/>
          
        <Route 
          path="/team1" 
          element={<Team />} 
        />
         
          <Route path="*" element={<h1>page not found </h1>} />
        </Routes>

        
        </Router>


          

        </AuthProvider>  
 

   
    </div>
  )
}

export default App;
