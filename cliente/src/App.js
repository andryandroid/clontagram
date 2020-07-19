import React, {useState} from 'react';
import Axios from 'axios';

import {setToken} from './Helpers/auth-helpers';
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

  return (
    <>
      <Nav />
      {/* <Signup /> */}
      <Login login={login} />
  <div>{JSON.stringify(usuario)}</div>
    </>
  );
}
