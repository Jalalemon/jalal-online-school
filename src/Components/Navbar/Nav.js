import React from 'react';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <div className='container text-danger mt-5'>
           
            <h1> <FontAwesomeIcon icon={faBookOpenReader} > </FontAwesomeIcon> Jalal's Online School</h1>
           
        </div>
    );
};

export default Nav;