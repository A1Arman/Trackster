import React from 'react';
import { Link } from 'react-router-dom';

function LandingPageNav() {
    return (
        <>
            <ul>
                <li>Log In</li>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/leadgen'>Lead Generation</Link></li>
                <li><Link to='/networking'>Networking</Link></li>
                <li><Link to ='/contacts'>Contacts</Link></li>
            </ul>
        </>
    )
}


export default LandingPageNav;
