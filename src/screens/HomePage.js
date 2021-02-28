import React   from 'react';
import './homePage.css';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Movie from '../components/Movie'
import requests from '../components/request'

const HomePage = () => {


    return (
     <div className='home_page'>
       

          {/* NAVBAR */}  
         
          <Nav/>

          {/* BANNER */}

          <Banner/>

          {/* MOVIES we have multi movie sections*/}
    
         <Movie title = 'Netflix Originals' fetchUrl = {requests.fetchNetflixOriginals} isLarge ={true} />
         <Movie title = 'Netflix Top Rated' fetchUrl = {requests.fetchTopRated} />
         <Movie title = 'Netflix Action' fetchUrl = {requests.fetchActionMovie} />
         <Movie title = 'Netflix Comedy' fetchUrl = {requests.fetchComedyMovie} />
         <Movie title = 'Netflix Horrer' fetchUrl = {requests.fetchHorrerMovie} />
         <Movie title = 'Netflix Romance' fetchUrl = {requests.fetchRomanceMovie} />




        </div>
    )
}

export default HomePage
