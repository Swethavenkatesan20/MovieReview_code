import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { colors } from '@mui/material';

export const AddMovie = ({movieList,setMovieList}) => {
    const [moviePoster,setMoviePoster]=useState("")
    const [movieName,setMovieName]=useState("")
    const [movieRating,setMovieRating]=useState("")
    const [movieSummary,setMovieSummary]=useState("")
    const [movieTrailer,setMovieTrailer]=useState("")

    const navigate=useNavigate()

    const addmovies=()=>{
      const movie={name:movieName,poster:moviePoster,rating:movieRating,summary:movieSummary,trailer:movieTrailer}
      console.log(movie);
      postMovies(movie)

    }

    const postMovies=async(movie)=>{
      const data=await fetch('https://65decd0dff5e305f32a07be9.mockapi.io/movie',{
        method:"POST",
        body:JSON.stringify(movie),
        headers:{
          "Content-Type":"application/json"
        }
      })
      const res=await data.json()
      console.log(res);
    }

  return (
    <>
    
    


    {/* MUI */}
    <Box sx={{width:"100%"} } >      
      
      <TextField sx={{
        width:"50%",
        margin:"1% 25% 1% 25%",
        // color: colors.grey[200]
      }}
      id="filled-basic" label="movie name" variant="filled" value={movieName}  onChange={(e)=>setMovieName(e.target.value)}
      
      InputLabelProps={{
        sx: {
          color: colors.green[900], // Set color for label text
        },
      }}
      />     
      
      <TextField sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="poster url" variant="filled" value={moviePoster} onChange={(e)=>setMoviePoster(e.target.value)} 
      
      InputLabelProps={{
        sx: {
          color: colors.green[900], // Set color for label text
        },
      }}
      />     
      
      <TextField sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="rating" variant="filled" value={movieRating}  onChange={(e)=>setMovieRating(e.target.value)}
      
      InputLabelProps={{
        sx: {
          color: colors.green[900], // Set color for label text
        },
      }}
      />     
      
      <TextField sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="summary" variant="filled" value={movieSummary}  onChange={(e)=>setMovieSummary(e.target.value)}
      
      InputLabelProps={{
        sx: {
          color: colors.green[900], // Set color for label text
        },
      }}
      />     
      
      <TextField sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="trailer" variant="filled" value={movieTrailer}  onChange={(e)=>setMovieTrailer(e.target.value)}
      
      InputLabelProps={{
        sx: {
          color: colors.green[900], // Set color for label text
        },
      }}
      />     

      <Button sx={{
        width:"15%",
        margin:"1% 1% 1% 35%"
      }}
      variant="contained" onClick={()=>addmovies()}
      > Add Movie</Button>
     <Button sx={{
        width:"15%",
        
      }}
     variant="contained" onClick={()=>{navigate('/')}}>back to home</Button>
    </Box>


    </>
  )
}
