import './App.css';
import MainForm from './component/mainForm';
import ViewAllName from './component/viewAllName';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainForm/>}/>
      <Route path='/allname' element={<ViewAllName/>}/>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
