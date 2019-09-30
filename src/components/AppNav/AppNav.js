import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../../GoogleAuth';

function AppNav() {
    return (
        <>
            <ul>
                <GoogleAuth />
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/leadgen'>Lead Generation</Link></li>
                <li><Link to='/networking'>Networking</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul>
        </>
    )
};


export default AppNav;