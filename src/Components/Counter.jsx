import { useState } from "react"


import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from '@mui/material/Badge';

export const Counter=()=>{

    const[disLike,setDisLike]=useState(0)
    const[like,setLike]=useState(0)
    return(
        <>
         <IconButton aria-label="share"
         onClick={()=>{
            // like+1
            setLike(like+1)
            console.log(like)
            }}       
        >
          <Badge badgeContent={like} color="primary">
            <ThumbUpIcon color="action" />
          </Badge>
        </IconButton>


        <IconButton aria-label="share"
        onClick={()=>{
            // disLike+1
            setDisLike(disLike+1)
            console.log(disLike)
            }}
        
        >
        <Badge badgeContent={disLike} color="primary">
          <ThumbDownIcon color="action" />
        </Badge>
        </IconButton>
        
        
        
        </>
    )
}

//hitting the button we change varialb==ble