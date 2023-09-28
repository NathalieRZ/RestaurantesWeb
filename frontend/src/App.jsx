import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { usuarioIn } from './api/restaurantes.api'
import { Inicio } from './pages/Inicio'
import {FormUser} from './pages/FormUser'
import { Navigation } from './components/navigation'
import { Login } from './pages/Login';
import { Logout } from './pages/Logout';
import { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);

  useEffect(() => {
    usuarioIn().then(function(res) {
      console.log(res)
      setCurrentUser(true);
    }).catch(function(error) {
      console.log('No han iniciado sesion')
      setCurrentUser(false);
    });
  }, []);
  if(currentUser){
    return (
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/registrarse' element={<FormUser />}/>
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/registrarse' element={<FormUser />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
  
  
}

export default App