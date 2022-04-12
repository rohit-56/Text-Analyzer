import React, {useState} from 'react'

export default function TextForm() {

  const handleOnClick= ()=>{
    setText(text.toUpperCase());
    console.log("Rohit");
  }

  const handleOnChange= (event)=>{
    console.log("on change");
    setText(event.target.value);
  }



  const [text, setText] = useState('Enter Text Here');

  
  return (
    <>
    <div className='container'>
    
       <h1>Enter your text</h1>
       <div className="mb-3">
           <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert your text into UpperCase</button>
    </div>
    </>
  )
}
