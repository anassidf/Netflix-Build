import React ,{useState , useEffect}from 'react'
import axios from './axios'
import './movie.css'


const Movie = ({title , fetchUrl , isLarge = false}) => {

const [movie , setMovie] = useState([]) ;
const base_image_url = "https://image.tmdb.org/t/p/original" ; 



useEffect(()=>{

   async function getter(){

        const detail = await axios.get(fetchUrl) ;
        setMovie(detail.data.results) ; 
       return detail ; 
    }

    getter();

},[fetchUrl]);


    return (
        <div className='movie'>
      
<h2>{title}</h2>


<div className='row'>


{
 movie.map(  film => {
   return  <img className= {`poster ${isLarge && 'poster_larg'}`}   src={`${base_image_url}${isLarge ? film.poster_path : film.backdrop_path }`} alt={film.name} />



 })


}
</div>


        </div>
    )
}

export default Movie
