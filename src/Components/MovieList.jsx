import { MovieCard } from "./MovieCard"
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteForever from "@mui/icons-material/DeleteForever";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useNavigate } from "react-router-dom";
//import { useEffect, useState } from "react";


export const MovieList = ({movieList,setMovieList}) => {
  const navigate=useNavigate();
  // useEffect(()=>{
  //    getMovie()
  //   },[]) // when ever i click this mode api call happens 
 
   
     async function getMovie() {
       const data= await fetch("https://65decd0dff5e305f32a07be9.mockapi.io/movie")
       const res= await data.json()
       console.log(res);
       setMovieList(res)
     
   
   }

  const deleteMovie=async(id)=>{
    console.log(`https://65decd0dff5e305f32a07be9.mockapi.io/movie/${id}`);
    let res=await fetch(`https://65decd0dff5e305f32a07be9.mockapi.io/movie/${id}`,{method:"DELETE"})
    let data=await res.json()
    console.log(data);
    getMovie()
  }


  console.log();
  return (
    <div className='d-flex flex-wrap bg-dark text-white' style={{gap:"2%"}}>      
    {
      // here map method has element and index since it is array. to access index number id is assed as props and used in movieCard
      movieList.map((element,index)=>(<MovieCard key={element.id} {...element} id={element.id} 
      deleteButton={
        <IconButton aria-label="share"
          onClick={()=>{
            deleteMovie(element.id)
            
          }}><DeleteForever/>
        </IconButton>
      }
      


      />))
      
    
    }

    </div>
    
  )
}

