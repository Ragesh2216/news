import { useState } from 'react'
import Navbar from './components/Navbar'
import NewsArea from './components/NewsArea'

const App=()=>{
const [category,setcategory]=useState("general")
  return (<>
   <Navbar setcategory={setcategory}/>
   <NewsArea category={category}/>
 
 </> )
}

export default App
