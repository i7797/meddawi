import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Use the correct file extension
import EmergencyContainer from './components/containers/EmergencyContainer.jsx'; // Use the correct file extension
import Team from './components/containers/Team.jsx'; // Use the correct file extension
import AskService from './components/containers/AskService.jsx'; // Use the correct file extension
import AskCare from './components/containers/AskCare.jsx'; // Use the correct file extension
import FinalService from './components/containers/FinalService.jsx'; // Use the correct file extension
import NurseHome from './pages/NurseHome.jsx'; // Use the correct file extension
import NurseTeam from './components/containers/NurseTeam.jsx'; // Use the correct file extension
import NurseProfile from './components/containers/NurseProfile.jsx'; // Use the correct file extension
import NursePost from './components/containers/NursePost.jsx'; // Use the correct file extension
import NurseLayout from './pages/NurseLayout.jsx'; // Use the correct file extension
import NurseStartPage from './pages/NurseStartPage.jsx'; // Use the correct file extension
import Front from './pages/Front.jsx'; // Use the correct file extension
import Signup from './Sign/SignUp.jsx';
import Signin from './Sign/SignIn.jsx';
import { AuthProvider } from "./Sign/AuthContext.jsx";

import Footerr from './Footerr.jsx'

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


        <Route path="/" element={<Front/>} />
          <Route path='/nursestartpage' element={<NurseStartPage/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={ <FinalService /> } />
          
        

          <Route path="/nurseteam" element={< NurseTeam/>} />
          <Route path="/nurseprofile" element={<NurseProfile />} />
          <Route path="/nursepost" element={<NursePost />} />

          <Route path="/nurse" element={<NurseHome />} />
         



        
          <Route path='/service/:id/:name' element={<AskService/>}/>
          <Route path='/askcare' element={<AskCare/>}/>
          <Route  path='/emergency' element={<EmergencyContainer/>}/>
          <Route path='/nurse' element={<NurseLayout/>}/>

          
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
