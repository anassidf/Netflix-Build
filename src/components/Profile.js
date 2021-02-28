import React from 'react'
import './Profile.css'
import Nav from '../components/Nav'
import {authentication} from '../firebase'
import {selectUser} from '../features/userSlice'
import {useSelector} from 'react-redux'

const Profile = () => {

const user = useSelector(selectUser);

    return (
        <div className='profile'>
           <Nav/>

<div className='profile_content'>

<h1 className='profile_header'>Edit Profile</h1>

<div className='profile_holder'>
<img  className ='profile_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ro1j3MIGrPbFYDEjHRike-Q54y_j3HxvRw&usqp=CAU' alt='profile logo'/>

<div className='plans'>
<p className = 'email'>{user.email}</p>

<button className='signout_button' onClick={()=>authentication.signOut()}>Sign Out</button>

</div>

</div>

</div>


<h1 className = 'anas'>anas</h1>
           
        </div>
    )
}

export default Profile
