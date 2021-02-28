const API_KEY = '2c177df250e52fcc6c4d783c164f1f3c' ;


const requests = {
fetchTrending : `/trending/all/week?api_key=${API_KEY}&languge=en-US` , 
fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213` , 
fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&languge=en-US` , 
fetchActionMovie : `/discover/movie?api_key=${API_KEY}&with_geners=28` , 
fetchComedyMovie : `/discover/movie?api_key=${API_KEY}&with_geners=35` , 
fetchHorrerMovie : `/discover/movie?api_key=${API_KEY}&with_geners=27` ,
fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_geners=10749` , 
fetchDocumentries :  `/discover/movie?api_key=${API_KEY}&with_geners=99`
};



export default  requests ; 