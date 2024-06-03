import { useState } from "react"
import { Counter } from "./Counter"
import { useNavigate } from "react-router-dom"


import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from "@mui/material/IconButton";

import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export const MovieCard=({name,poster,rating,summary,id,deleteButton,editButton})=>{

    
    const[show,setShow]=useState(false)
    const navigate=useNavigate()

    const ratingStyle={
        // backgroundColor:"pink"
        color: rating>8?"green":"red"
    }   
    return(
        <><Card sx={{ width: "300px",margin:"10px 5px 5px 5px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings"
            onClick={()=>navigate(`/movies/${id}`)}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={rating}
        />
        <CardMedia
          component="img"
          height="500"
          
          image={poster}
          alt="Paella dish"
        />
         <CardActions disableSpacing>
  
         <Counter/>
  
           {/* UseContextNaming Replace Summary */}
          <IconButton aria-label="share"
            onClick={()=>{
             
              setShow(false)                        
              }}       
          >
            
          </IconButton>
         
         {/* Use Context Cart */}
          
  
          {/* Summary Icon */}
          <IconButton aria-label="share"
            onClick={()=>{
              setShow(!show)
              
            }}>{show? <ExpandMoreIcon />:<ExpandLessIcon/>}           
          </IconButton>
            {deleteButton}
            {editButton}
  
          
        </CardActions>
  
        
        {/* Summary */}
  
         
         {show &&  <CardContent> <Typography variant="body2" color="text.secondary">{summary}
          </Typography> </CardContent>
          }
        
      </Card>
      </>
    )
}