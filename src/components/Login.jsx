import React from 'react'
import "../css/login.css";
export const Login = () => {
    return (

        <div className="loginScreen">
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt='true' />
            <h1>Make the most of your professional life</h1>
            <form>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Profile Picture URL" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <p className="policy">By clicking Agree & Join, you agree to the <span>LinkedIn User Agreement, Privacy Policy,</span> and<span> Cookie Policy.</span></p>
                <button className='submitButton'>Agree & Join </button>
                <h4>Already on Linkedin ? <span>Sign in</span></h4>
            </form>
        </div>

    )
}

