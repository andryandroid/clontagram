import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import { faUpload} from '@fortawesome/free-solid-svg-icons';
import Main from '../Componentes/Main';
import Loading from '../Componentes/Loading';
import Axios from 'axios';

export default function Upload(){
    return (
        <Main center>
            <div className = "Upload" >
                <form>
                    <div className = "Upload__image-section"/>
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