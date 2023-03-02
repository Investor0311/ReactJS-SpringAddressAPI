import './App.css';
import AddressBook from './components/AddressBook';
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import UpdateDetails from './components/UpdateDetails';

function App() {
  return (

    <BrowserRouter>
    <ToastContainer/>
    <div>
    <Routes>
        <Route path='/' element={<AddressBook/>}/>
        <Route path='/auth' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/update' element={<UpdateDetails/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
