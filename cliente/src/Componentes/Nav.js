import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCameraRetro} from '@fortawesome/free-solid-svg-icons';

export default function Nav( {usuario}){
    return(
        <nav className="Nav">
            <ul className="Nav__links">
                <li>
                    <Link className='Nav__link' to="/">Clontagram</Link>
                </li>
                {usuario && <LoginRoutes/>}
            </ul>
        </nav>
    )
}

function LoginRoutes(){
 return(
     <>
        <li className="Nav__link-push">
            <Link className='Nav__link' to='/upload'>
                <FontAwesomeIcon icon ={faCameraRetro} />
            </Link>
        </li>
     </>
 )
}