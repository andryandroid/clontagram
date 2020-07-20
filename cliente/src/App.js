import React, {useState} from 'react';
import Axios from 'axios';

import {setToken, deleteToken} from './Helpers/auth-helpers';
import Nav from './Componentes/Nav';

import Signup from './Vistas/Signup';
import Login from './Vistas/Login';

export default function App() {
  const [usuario, setUsuario] = useState(null); 

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

  return (
    <>
      <Nav />
      {/* <Signup signup={signup} /> */}
      <Login login={login} />
  <div>{JSON.stringify(usuario)}</div>
    </>
  );
}
