import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export const Navbar=({mode,setMode})=> {
    const navigate=useNavigate()
  return (
    <Box sx={{ display: 'flex' }}>
      
      <AppBar component="nav">
      <Toolbar>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>BIG SHOW
                 
        </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
            <Button  sx={{ color: '#fff' }} onClick={()=>{navigate('/')}}> HOME </Button>
             
            <Button  sx={{ color: '#fff' }} onClick={()=>{navigate('/addmovie')}}> ADD MOVIE </Button>
     
            {/* <Button  sx={{ color: '#fff' }} onClick={()=>{navigate('/addcolor')}}> ADD COLOR </Button> */}

            {/* <Button  sx={{ color: '#fff' }} onClick={()=>{navigate('/formik')}}> FORMIK </Button> */}

            <Button  sx={{ color: '#fff' }}
              onClick={()=>{setMode(mode=="light"?"dark":"light")}}    
              >
               {mode=="light"?"DARK MODE":"LIGHT MODE"}
              </Button>
          </Box>
      </Toolbar>
      </AppBar>
      
      <Box component="main" sx={{ m: 4 }}>
        
      </Box>
    </Box>
  );
}


