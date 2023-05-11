import './App.css';
import Login from './component/login';
import Singup from './component/singup';
import Home from './component/home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
     <Route path='/' element={<Login/>}/>
      <Route path='/singup' element={<Singup/>}/>
      <Route path='/home' element={<Home/>}/>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
