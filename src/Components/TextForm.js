import React, {useState} from 'react'

export default function TextForm(props) {

  const handleOnClick= ()=>{
    setText(text.toUpperCase());
  }

  const handleOnChange= (event)=>{
    setText(event.target.value);
  }
  
  const clearAll=()=>{
    setText("");
  }


  const [text, setText] = useState('Enter Text Here');

  
  return (
    <>
    <div className="container my-3" style={{color : props.textcolor}}>
    
       <h1>Enter your text</h1>
       <div className="mb-3">
           <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert your text into UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={clearAll}>Clear Text</button>
    </div>
    <div className='container'> 
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  )
}
