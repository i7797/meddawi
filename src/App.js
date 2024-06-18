
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="grid col-span-12">
      <BrowserRouter>
         <AppRouter/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
