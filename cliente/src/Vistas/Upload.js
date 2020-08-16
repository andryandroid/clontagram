import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Main from '../Componentes/Main';
import Loading from '../Componentes/Loading';
import Axios from 'axios';

export default function Upload(){
    const [imagenUrl, setImagenUrl] = useState('');
    const [subiendoImagen, setSubiendoImagen] = useState(true);

    return (
        <Main center>
            <div className = "Upload" >
                <form>
                    <div className = "Upload__image-section">
                        <SeccionSubirImagen
                            imagenUrl={imagenUrl}
                            subiendoImagen={subiendoImagen}
                        />
                    </div>
                    <textarea 
                        name = "caption" 
                        className = "Upload__caption" 
                        required 
                        maxLength = "180"
                        placeholder = "Caption de tu post."
                    />
                    <button className = "Upload__submit" type = "submit" > Post</button>
                </form>
            </div>
        </Main>
    )
}

function SeccionSubirImagen({subiendoImagen, imagenUrl}){
    if (subiendoImagen){
        return <Loading />
    } else if (imagenUrl){
        return <img src={imagenUrl} alt=""/>
    } else{
        return(
            <label className="Upload__image-label">
                <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                <span>Publica una foto</span>
                <input type="file" className="hidden" name="imagen"></input>
            </label>
        )
    }
}