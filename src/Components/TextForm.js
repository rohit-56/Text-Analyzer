import React, {useState} from 'react'

export default function TextForm(props) {

  const handleOnClick= ()=>{
    setOutputText(text.toUpperCase());
  }

  const handleOnChange= (event)=>{
    setText(event.target.value);
  }
  
  const clearAll=()=>{
    setText("");
  }

  const countWords=()=>{
    setOutputText(`${text.split(" ").length}`);
  }

  const convertLowerCase=()=>{
    setOutputText(text.toLowerCase());
  }

  const countCharacter=()=>{
    setOutputText(`${text.length}`-`${text.split(" ").length}`+1);
  }
  const [text, setText] = useState('Enter Text Here');
  const [outputText,setOutputText]=useState("");

  
  return (
    <>
    <div className="container my-3" style={{color : props.textcolor}}>
    
       <h1>Enter your text</h1>
       <div className="mb-3">
           <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Convert your text into UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={convertLowerCase}>Convert your text into LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={clearAll}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={countWords}>Count Words</button>
        <button className="btn btn-primary mx-1" onClick={countCharacter}>Count Characters</button>
        <button className="btn btn-primary mx-1" onClick={countWords}>Count Digits</button>
        <button className="btn btn-primary mx-1" onClick={countWords}>Count Special Characters</button>
    </div>
    <div className='container' style={{color:props.textcolor}}> 
      <h1>Output</h1>
      <div className="mb-3">
          <textarea className="form-control"  value={outputText} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
    </div>
    </>
  )
}
