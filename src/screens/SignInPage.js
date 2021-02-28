import React, { useRef } from 'react'
import './signInPage.css'
import  { authentication } from '../firebase'

const SignInPage = () => {

const emailRef = useRef(null) ; 
const passwordRef = useRef(null) ; 


const signIn = (e)=>{
   
    e.preventDefault() ; 
  authentication.signInWithEmailAndPassword(emailRef.current.value , passwordRef.current.value)
  .then((success)=>{console.log(success)}).catch((err)=>{alert(err.message)}) ; 
}

const signUp = (e)=>{
    e.preventDefault() ;
    authentication.createUserWithEmailAndPassword(emailRef.current.value , passwordRef.current.value)
    .then((auth)=>{console.log(auth)})
    .catch((err)=>{alert(err.message)}) ; 

    
    
}

    return (
        <div className='signin_form'>
      
      

         <h2 className= 'text' >Sign In</h2>
        
        <form>
             <input required ref={emailRef} type= 'email' className='input_field' placeholder='Email'/>
             <input required ref={passwordRef} type= 'password' className='input_field' placeholder='Password'/>
             <button onClick={signIn} type = 'submit' className='signin'>Sign In</button>
        </form>
  

       <h5 className='signUp'><span className='signUp_text'>New to Netflix?</span><span onClick={signUp} className='signUp_link'> Sign Up Now.</span></h5>
        </div>
    )
}

export default SignInPage
