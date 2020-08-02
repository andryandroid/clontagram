import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Main from '../Componentes/Main';
import imagenSignup from '../imagenes/signup.png';

export default function Signup({signup}) {
    const [usuario, setUsuario] = useState({
        email: '',
        nombre: '',
        username: '',
        bio: '',
        password: ''
    })

    function handleInputChange(e){
        setUsuario ({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            signup(usuario);
        }catch(error){
            console.log(error);
        }

    }

    return(
        <Main center={true}>
            <div className="Signup">
               <img src={imagenSignup} alt="" className="Signup__img"></img>
                <div className="FormContainer">
                    <h1 className="Form__titulo">Clontagram</h1>
                    <p className="FormContainer__info">
                        Registrate para que veas el clon de Instagram
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            className="Form__field"
                            onChange={handleInputChange} 
                            value={usuario.email}
                            required>
                        </input>
                        <input 
                            type="text" 
                            name="nombre" 
                            placeholder="Nombre y Apellido" 
                            minLength="3" 
                            maxLength="100" 
                            className="Form__field"
                            onChange={handleInputChange}
                            value={usuario.name} 
                            required>
                        </input>
                        <input type="text" 
                            name="username" 
                            placeholder="Nombre de Usuario" 
                            minLength="3" 
                            maxLength="30" 
                            className="Form__field"
                            onChange={handleInputChange}
                            value={usuario.username} 
                            required>
                        </input>
                        <input 
                            type="text" 
                            name="bio" 
                            placeholder="Cuentanos de ti..." 
                            minLength="3" 
                            maxLength="150" 
                            className="Form__field"
                            onChange={handleInputChange}
                            value={usuario.bio} 
                            required>
                        </input>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            className="Form__field"
                            onChange={handleInputChange}
                            value={usuario.password} 
                            required> 
                        </input>
                        
                        <button className="Form__submit" type="submit">Sign Up</button>
                        <p className="FormContainer__info">
                            ¿Ya tienes cuenta? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div> 
            </div>
        </Main>  
    );
}