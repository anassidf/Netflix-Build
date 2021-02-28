import React , {useEffect}from 'react';
import HomePage from './screens/HomePage'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import SignIn from './screens/SignIn'
import {authentication} from './firebase'
import {logIn, logOut ,selectUser} from './features/userSlice'
import {useDispatch , useSelector} from 'react-redux'
import Profile from './components/Profile';



function App() {

const dispatch = useDispatch() ;
const users = useSelector(selectUser);

useEffect(() => {
      
    const unsubscribe =  authentication.onAuthStateChanged((userAuth)=>{

if (userAuth){

console.log(userAuth) ;
dispatch(logIn({
 uid : userAuth.uid ,       
 email : userAuth.email
}))


}
else {
dispatch(logOut()) ; 

}

     }) ; 


     return unsubscribe ;  

}, [dispatch])



  return (
    <Router>
       <div className="app">



{!users  ? (

<Route>
{/* signIn component */}
<SignIn/>
</Route>
) : (
<>



<Route exact path='/'>
       <HomePage/>
</Route>

<Route exact path='/profile'>

<Profile/>

</Route>


</>  )
}


       </div>
    </Router>
    );
}

export default App;
