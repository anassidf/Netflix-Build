import React , {useState , useEffect}from 'react'
import './nav.css'
import {useHistory} from 'react-router-dom'


const Nav = () => {

 const history = useHistory() ;    

const [scroll , handleScroll] = useState(true) ; 

const scrolling = ()=>{

if (window.scrollY > 100)
handleScroll(false);
else
handleScroll(true) ; 

console.log("anas")


}

useEffect(()=>{

window.addEventListener('scroll' , scrolling) ; 

return () => { window.removeEventListener('scroll' , scrolling) ; }


}, []);



    return (
 <div className={`nav ${scroll  && 'nav_transparent'}`}>
<div className='nav_container'>

          <img onClick={()=>(history.push('/'))}  className ="nav_logo" src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix logo'/>
          <img onClick={()=>(history.push('/profile'))   } className ='nav_profile' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ro1j3MIGrPbFYDEjHRike-Q54y_j3HxvRw&usqp=CAU' alt='profile logo'/>
            
          

</div>
        </div>
    )
}

export default Nav
