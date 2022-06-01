
import './App.css';
import Home from './Components/Home'
import Nav from './Components/Nav'
import Student from './Components/Student'
import Contact from './Components/Contact'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Details from './Components/Details'
import AddStudent from './Components/AddStudent';
import Edit from './Components/Edit';



function App() {
  return (

    <Details>
      <>
    <BrowserRouter>
     <Nav />
     <Routes>
       
     <Route path="/home" element={ <Home /> } />
     <Route path="/student" element={ <Student /> } />
     <Route path="/contact" element={ <Contact /> } />
     <Route path="/add-student" element={ <AddStudent /> } />
     <Route path="/edit" element={ <Edit /> } />

     </Routes>
     </BrowserRouter>
     </>
   </Details>
   
 );
}

export default App;