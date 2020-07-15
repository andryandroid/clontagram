import React, {useState} from 'react';
import Main from '../Componentes/Main';
import imagenSignup from '../imagenes/signup.png';
import { useState } from 'react';

export default function Signup() {

    const usuario = {
        email: '',
        name: '',
        username: '',
        bio: '',
        password: ''
    }

    function handleInputChange(e){
        usuario[e.target.name] = e.target.value;
        console.log(usuario);
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
                    <form>
                        <input
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            className="Form__field"
                            onChange={handleInputChange} 
                            required>
                        </input>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nombre y Apellido" 
                            minLength="3" 
                            maxLength="100" 
                            className="Form__field"
                            onChange={handleInputChange} 
                            required>
                        </input>
                        <input type="text" 
                            name="username" 
                            placeholder="Nombre de Usuario" 
                            minLength="3" 
                            maxLength="30" 
                            className="Form__field"
                            onChange={handleInputChange} 
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
                            required>
                        </input>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            className="Form__field"
                            onChange={handleInputChange} 
                            required> 
                        </input>
                        
                        <button className="Form__submit" type="submit">Sign Up</button>
                        <p className="FormContainer__info">
                            ¿Ya tienes cuenta? <a href="#">Login</a>
                        </p>
                    </form>
                </div> 
            </div>
        </Main>  
    );
}