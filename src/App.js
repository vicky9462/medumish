import React from 'react'
import {Route,Routes} from 'react-router-dom';


import Author from './Author/Author';
import Title from './Title';
import Post from './Post/Post'

const  App=()=> {
  return (
    <>
    <Routes> 
<Route path='/' element={<Title/>}/>
 <Route path='/author' element={<Author/>}/>
 <Route path='/post' element={<Post/>}/>
      </Routes>
 
    </>
  )
}

export default App;

