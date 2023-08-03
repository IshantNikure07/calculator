import React , {useState} from "react";

// import React from 'react'

export default function Textutils() {
      const [text , setText] = useState("enter")

      const clicked = ()=> {
        let newtext = text.toUpperCase();
        setText(newtext)}

      const changed = (event)=> {
        setText(event.target.value)

      }
      
  return (
     <>
     <div>
        <h1>calculate </h1>
        <div className="mb-3">
            <textarea value={text} className="form-control" id="myBox" rows="8"  onChange= {changed} >   
            </textarea>
        </div>
        <button className="btn btn-primary" onClick={clicked}> UppeR CasE</button>
     </div> 

     <div className="container" >
        <h1>More Info</h1>
        <p>your para have {text.split(" ").length} words and {text.length}characters</p>

     </div> 
     </> 
  )
};