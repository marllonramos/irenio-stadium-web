import React from 'react';

import './index.css';

const Login = () =>{
    return (
        <div>
            <hgroup>
            <h1>Material Design Form</h1>
            <h3>By Josh Adamous</h3>
            </hgroup>
            <form>
                <input type="text"><span class="highlight"></span><span class="bar"></span>
                <label>Name</label>
                
                <input type="email"><span class="highlight"></span><span class="bar"></span>
                <label>Email</label>
                
                <button type="button" class="button buttonBlue">Subscribe
                    <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
                </button>
            </form>
        </div>
    );
};

export default Login;
