
import { AddColor } from './Components/AddColor'
import { movie } from './Utils/Constant'
import './App.css'
import { AddMovie } from './Components/AddMovie'
import { useEffect, useState } from 'react'
import { MovieList } from './Components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes ,Link} from 'react-router-dom'
import { Notfound } from './Components/Notfound'
import { MovieDetails } from './Components/MovieDetails'
import { Navbar } from './Components/Navbar'
// import { cardContext } from './Utils/cardContext'
//import MuiTest from './Components/MuiTest'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {EditMovie} from './Components/EditMovie'
import { Formik } from './Components/Formik'


function App() {
  
  const [movieList,setMovieList]=useState([])
  // const [cartUCtxt,setcartUCtxt]=useState()
//  dark theme
const [mode,setMode]=useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  //use effect is used to get api data normal function call has too many renders
  useEffect(()=>{
   getData()
  },[mode]) // when ever i click this mode api call happens 

  
    async function getData() {
      const data= await fetch("https://65decd0dff5e305f32a07be9.mockapi.io/movie")
      const res= await data.json()
      console.log(res);
      setMovieList(res)
    
  
  }//getData() this will also get data but this has too many renders 


  return (
    <ThemeProvider theme={theme}>
      
    <div>
    <Navbar mode={mode} setMode={setMode}/>
    

      <Routes>
        <Route path='/'element={<MovieList movieList={movieList} setMovieList={setMovieList}/>}/>

        <Route path='/addcolor' element={<AddColor/>}/>
        <Route path='/addmovie' element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}/>
        <Route path='*' element={<Notfound/>}/>
        
        {/* here this id is passed as dynamic value keeps changing i can use this id in movieDetails as params and access this---*see moviedetails */}
        <Route path='/movies/:id' element={<MovieDetails movieList={movieList}/>}/>
        <Route path='/edit/:id' element={<EditMovie/>}> </Route>
      
        <Route path='/formik' element={<Formik/>}/>
      </Routes>

      </div>
      
      </ThemeProvider>
      
    
  )
}

export default App
