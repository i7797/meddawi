
import AppRouter from './AppRouter.jsx';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/MediaQuery.css'
import Home from './pages/Home.jsx';
import FinalService from './components/containers/FinalService.jsx';
import Team from './components/containers/Team.jsx';


function App() {
  return (
    <div className="App flex justify-center items-center flex-col w-screen h-screen lg:w-full lg:h-full">
      <BrowserRouter>
         {/* <AppRouter/>   */}
         <section className='flex h-screen w-screen'>
           <Home/>
         </section >
         <section className='hidden lg:block'>
          <FinalService/>
         </section>
         <section className='hidden lg:block'>
          <Team/>
         </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
