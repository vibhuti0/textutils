import React,{useState}from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("UpperCase was clicked" + text );
    let newText= text.toUpperCase();
    setText(newText)
    //setText("You have clicked on handleUpClick")
  }
  const handleLoClick = ()=>{
    console.log("UpperCase was clicked" + text );
    let newText= text.toLowerCase();
    setText(newText)
    //setText("You have clicked on handleUpClick")
  }
  const handleClearClick = ()=>{
    console.log("UpperCase was clicked" + text );
    let newText= " ";
    setText(newText)
    //setText("You have clicked on handleUpClick")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here'); //created a state which is text whose value is enter text here //text is a state variable .it can be updated using setText function.
  return (
    <> 
    <div className='container'>
     <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button> 
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
