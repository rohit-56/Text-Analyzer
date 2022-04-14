import './App.css';
import TextForm from './Components/TextForm';
import NavBar from './Components/NavBar';
// import About from './Components/About';
import React,{useState} from 'react';

function App() {

  const [mode,setMode] = useState('light');
  const [textcolor ,setTextcolor] =useState('black');

  const toggleMode = ()=>{
    if(mode === 'light'){
     setMode('dark');
     setTextcolor('white');
    }
    else{
      setMode('light');
      setTextcolor('black');
    }
  }

  return (
    <>
   <NavBar title="TextUtils" mode={mode}  toggleMode={toggleMode} textcolor={textcolor} />
    <TextForm/>
    {/* <About /> */}
    </>
    
  );
}

export default App;
