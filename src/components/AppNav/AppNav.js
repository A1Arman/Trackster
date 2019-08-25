import React from 'react';
import { Link } from 'react-router-dom';

function AppNav() {
    return (
        <>
            <ul>
                <li>Log Out</li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/leadgen'>Lead Generation</Link></li>
                
            </ul>
        </>
    )
};


export default AppNav;