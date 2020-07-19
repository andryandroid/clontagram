import React, {useState} from 'react';
import Axios from 'axios';
import Main from '../Componentes/Main';

export default function Login() {
    const [emailYPassword, setEmailYPassword] = useState({
        email: '',
        password: ''
    })

    function handleInputChange(e){
        setEmailYPassword ({
            ...emailYPassword,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            const { data } = await Axios.post('/api/usuarios/login', emailYPassword);
            console.log(data);
        }catch(error){
            console.log(error);
        }

    }

    return(
        <Main center>
            <div className="FormContainer">
                <h1 className="Form__titulo">Clontagram es muy lindo</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            className="Form__field"
                            onChange={handleInputChange} 
                            value={emailYPassword.email}
                            required>
                        </input>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            className="Form__field"
                            onChange={handleInputChange}
                            value={emailYPassword.password} 
                            required> 
                        </input>
                        
                        <button className="Form__submit" type="submit">Login</button>
                        <p className="FormContainer__info">
                            No tienes cuenta? <a href="#">Singup</a>
                        </p>
                    </form>
                </div>
            </div> 
        </Main>  
    );
}