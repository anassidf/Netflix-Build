import React , {useState , useEffect} from 'react';
import './banner.css';
import axios from './axios';
import request from './request' ; 
const Banner = () => {

const [movie , setMovie] = useState([]) ; 

useEffect(()=>{

async function getter(){

    const detail = await  axios.get(request.fetchNetflixOriginals) ; 
    setMovie(
     detail.data.results[Math.floor(Math.random()*detail.data.results.length -1)]) ; 
    return detail ; 
  
}


getter();

} , []) ; 


// test

console.log(movie)

const truncate=(text , limit)=>{

return  text?.length > limit ? text.substring(0 , limit + 1 ) + " ..."  : text ; 
}


    return (
        <div className='banner' style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '477px',
        objectFit:'contain'}}>
         

<div className='banner_layout'>

<div className='banner_content'>
<h1 className='movie_name'>{movie?.name || movie?.title || movie?.original_name}</h1>
<button className='banner_button'>Play</button>
<button className='banner_button'>More Info</button>

<p className='description'>{truncate(movie?.overview, 150)}
</p>

</div>
</div>

{<div className='fade'></div> 
}





        </div>
    )
}

export default Banner
