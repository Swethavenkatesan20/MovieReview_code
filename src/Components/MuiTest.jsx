import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


import { useState } from "react"
import { useNavigate } from "react-router-dom"




export default function RecipeReviewCard({name,poster,rating,summary,id}) {

  const[show,setShow]=useState(false)
    const navigate=useNavigate()

    const ratingStyle={
        // backgroundColor:"pink"
        color: rating>8?"green":"red"
    }   

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={rating}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      
    <CardActions disableSpacing>

      <IconButton aria-label="share"> 
      <Badge badgeContent={4} color="primary" sx={{marginRight:2}}>
       <ThumbUpIcon color="action" />
      </Badge>
      </IconButton>

      <IconButton aria-label="share">
    <Badge badgeContent={4} color="primary">
      <ThumbDownIcon color="action" />
    </Badge>
      </IconButton>

      <IconButton aria-label="share">
          <ControlPointIcon />
      </IconButton>
 

 {/* drop down */}
 <IconButton aria-label="share"
          onClick={()=>{
            setShow(!show)
            
          }}>{show? <ExpandMoreIcon />:<ExpandLessIcon/>}           
        </IconButton>
          
        
    </CardActions>


      {/* summary */}
      {show &&  <CardContent> <Typography variant="body2" color="text.secondary">{summary}
        </Typography> </CardContent>
        }
    </Card>
  );
}
