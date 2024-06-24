
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/MediaQuery.css'
function App() {
  return (
    <div className="App grid col-span-12 w-screen h-screen lg:w-screen lg:h-screen">
      <BrowserRouter>
         <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
