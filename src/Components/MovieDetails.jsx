import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const MovieDetails = ({movieList}) => {
  // i used this id from movieDetails path declared in app.jsx destructre and use since the id is changing it will give the resective id

  const {id}=useParams() // take arameter from url
  
  // console.log(movieList[id]);
  const movie=movieList[id]
  const navigate=useNavigate()

  return (
    <div className='bg-dark text-white'>
     <div>MovieDetails {id}</div> 
    <h1>{movie.name}</h1>
    
    {/* trailer */}

    <iframe width="442" height="249" src={movie.trailer} title="trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h6>{movie.summary} </h6>

<button className='btn btn-primary mb-3' onClick={()=>{
navigate(-1)
}}> Back</button>
    </div>
  )
}
