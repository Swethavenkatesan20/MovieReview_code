import { useState } from "react"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const AddColor=()=>{
    const [colorval,setColorval]=useState("")
    const [colorList,setcolorList]=useState([colorval])
    const navigate=useNavigate()

    const inputStyle={
        backgroundColor:colorval
        
    }

    // const divStyle={
    //     height:"30px",
    //     width:"250px",
    //     backgroundColor:colorList
    // }
    return(
    < >
        
     <Box>
        <TextField sx={{
                width:"35%",
                margin:"1% 25% 1% 25%"
                }}
            id="filled-basic" label="typeColor" variant="filled"  value={colorval} onChange={(e)=>{setColorval(e.target.value)}}style={inputStyle}/>
        <Button sx={{
                width:"15%",
                margin:"1% 1% 1% 35%"
                }}
            variant="contained" onClick={()=>{setcolorList([...colorList,colorval])}}>add color 
        </Button>
   
        {colorList.map((element)=><div style={{height:"30px",width:"400px",backgroundColor:element, margin:"1% 1% 1% 30%"}}> </div>)}
        
        <Button sx={{
                width:"15%",
                margin:"1% 1% 1% 35%"       
                }}
            variant="contained" onClick={()=>{navigate('/')}}>back to home</Button>
     </Box>
    </> 
    )
}