import './App.css';
import TextForm from './Components/TextForm';
import NavBar from './Components/NavBar';
import About from './Components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [textcolor ,setTextcolor] =useState('black');

  const toggleMode = ()=>{
    if(mode === 'light'){
     setMode('black');
     setTextcolor('white');
     document.body.style.backgroundColor="black";
    }
    else{
      setMode('light');
      setTextcolor('black');
      document.body.style.backgroundColor="white";
    }

  }

  return (
    <>
    <Router>
      <div>
   <NavBar title="TextUtils" mode={mode}  toggleMode={toggleMode} textcolor={textcolor} />
    
    
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
           <TextForm mode={mode}  textcolor={textcolor}/>
          </Route>
          
        </Switch>
        </div>
        </Router>
    </>
    
  );
}

export default App;
