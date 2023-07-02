import React, {useState} from 'react'

export default function Textform(props) {

  const handleUpclick=()=>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    {props.showAlert("Converted to Uppercase", "success")}
  }

  const handleLoclick=()=>{
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    {props.showAlert("Converted to Lowercase", "success")}
  }

  // const handleBoldclick=()=>{
  //   console.log("Uppercase was clicked");
  //   let newText = `<b>${text}</b>`;
  //   setText(newText);
  // }

  // const handleItalicclick=()=>{
  //   console.log("Uppercase was clicked");
  //   let newText = `<i>${text}</i>`;
  //   setText(newText);
  // }

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("text");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!", "success")
  }

  const handleSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleClearclick=()=>{
    console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success")
  }

  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  return (
    <div className='Ram'>
    <div className="container" style={{color: props.mode==='light'?"black":"white"}}>
        <h1>
            {props.title}
        </h1>
    <label hrmlfor="test" className="form-label">Example textarea</label>
    <textarea className='form-control' value={text} onChange={handleOnChange} placeholder='Enter text here' id="text" rows="8" style={{backgroundColor: props.mode==='light'?"white":"grey",color: props.mode==='light'?"black":"white"}}  ></textarea>
    <button className='btn btn-primary my-3 mx-3' onClick={handleUpclick}>Convert to UpperCase</button>
    <button className='btn btn-primary my-3 mx-3' onClick={handleLoclick}>Convert to LowerCase</button>
    <button className='btn btn-primary my-3 mx-3' onClick={handleCopy}>Copy to Clipboard</button>
    <button className='btn btn-primary my-3 mx-3' onClick={handleSpaces}>Remove Extra Spaces</button>
    <button className='btn btn-primary my-3 mx-3' onClick={handleClearclick}>Clear</button>
    </div>
    <div className="container" style={{color: props.mode==='light'?"black":"white"}}>
      <h3>
        Your Text Summary
      </h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </div>
  )
}
