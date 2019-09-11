import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../../GoogleAuth';

function LandingPageNav() {
    return (
        <>
            <ul>
                <GoogleAuth />
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/leadgen'>Lead Generation</Link></li>
                <li><Link to='/networking'>Networking</Link></li>
                <li><Link to ='/contacts'>Contacts</Link></li>
            </ul>
        </>
    )
}


export default LandingPageNav;
