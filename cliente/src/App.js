import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Axios from 'axios';

import {setToken, deleteToken, getToken, initAxiosInterceptors} from './Helpers/auth-helpers';
import Nav from './Componentes/Nav';
import Loading from './Componentes/Loading';

import Signup from './Vistas/Signup';
import Login from './Vistas/Login';
import Main from './Componentes/Main';

initAxiosInterceptors();

export default function App() {
  const [usuario, setUsuario] = useState(null); 
  const [cargandoUsuario, setCargandoUsuario] = useState(true);

  useEffect(() => {
    async function cargarUsuario(){
      if(!getToken()){
        setCargandoUsuario(false);
        return;
      }
      
      try{
        const {data: usuario} = await Axios.get('/api/usuarios/whoami');
        setUsuario(usuario);
        setCargandoUsuario(false);
      }catch(error){
        console.log(error);
      }
    }
    cargarUsuario();
  }, []);

  async function login(email, password){
    const { data } = await Axios.post('/api/usuarios/login', {
      email,
      password
    });
    setUsuario(data.usuario);
    setToken(data.token);
  }

  async function signup(usuario){
    const { data } = await Axios.post('/api/usuarios/signup', usuario);
    setUsuario(data.usuario);
    setToken(data.token);
  }

  function logout(){
    setUsuario(null);
    deleteToken();
  }

  if(cargandoUsuario){
    return(
      <Main center>
        <Loading/>
      </Main>
    )
  }

  return (
    <Router>
      <Nav />
      {usuario ? <LoginRoutes/> : <LogoutRoutes login={login} signup={signup} ></LogoutRoutes>}
    </Router>
  );
}

function LoginRoutes(){
  return(
    <Switch>
      <Route component={()=> <Main center><h1>Hola :D</h1></Main>} default></Route>
    </Switch>
  );
}

function LogoutRoutes({login, signup}){
 return(
   <Switch>
     <Route path="/login/" render={(props) => <Login {... props} login={login}></Login>}></Route>
     <Route render={(props) => <Signup {... props} signup={signup}></Signup>} default ></Route>
   </Switch>
 );
}