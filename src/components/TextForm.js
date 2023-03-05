import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase",'success')
  };
  const handleLoClick = () => {
    console.log("Uppercase was click" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase",'success')
  };
  const handleOnChange = (event) => {
    console.log("on change was click");
    setText(event.target.value);
  };
  const handleCopy=()=>{
    console.log("I am copy")
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9000);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard",'success')
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extraspaces",'success')
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>
          Remove Extra spaces
        </button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} character </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

// note:start 8V
