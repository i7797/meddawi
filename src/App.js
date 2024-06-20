
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/MediaQuery.css'
function App() {
  return (
    <div className="App grid col-span-12">
      <BrowserRouter>
         <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
