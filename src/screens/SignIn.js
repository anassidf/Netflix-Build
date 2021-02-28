import React from 'react'
import { useState } from 'react'
import './signIn.css'
import SignInPage from './SignInPage';

const SignIn = () => {

    const [signIn , setSignIn] = useState(false) ; 


    return (
        <div className='signIn'>



        <div className='signin_navbar'>
            <img className ="netflix_logo" src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix logo'/>
            <button className='signin_button' onClick={()=>setSignIn(true) } >Sign In</button>
            </div>
            <div className='layout'>

{
    signIn ? ( <SignInPage/>) : ( 
<>
<h1 className='first_text'>Unlimited films, TV programmes and more.</h1>
<h2 className='sec_text'>watch anywhere. Cancel at any time.</h2>
<p className='third_text'>Ready to watch? Enter youre email to create or restart youre membership</p>
         <form className='sign_form'>
          <input className= 'emai_input' type='email' placeholder= 'Enter youre email Address' required />
         <button className='start_button' onClick={()=>setSignIn(true) } >GET STARTED</button>
         </form>
  </>
    ) 
}





            </div>


        </div>
    )
}

export default SignIn
