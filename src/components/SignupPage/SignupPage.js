import React from 'react';

function SignupPage(props) {
    return (
        <>
            <header>
                <h3>Let us Keep You Organized During Your Job Search</h3>
            </header>
            <form id='signup-form' onSubmit={props.handleSignup}>
                <div>
                <label htmlFor="first_name">First name</label>
                <input placeholder='First Name' type="text" name='first_name' id='first_name' />
                </div>
                <div>
                <label htmlFor="last_name">Last name</label>
                <input type="text" name='last_name' id='last_name' placeholder='Last Name' />
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </>
    )
};

export default SignupPage;