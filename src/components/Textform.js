import React,{useState}from 'react'
export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("UpperCase was clicked");
    setText("You have clicked on handleUpClick")
  }
  const handleOnChange = ()=>{
    console.log("On Change");
  }
  const [text, setText] = useState('Enter text here'); //created a state which is text whose value is enter text here
  return (
    <div>
     <h1>{props.heading} - {text}</h1>
<div className="mb-3">
  
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
