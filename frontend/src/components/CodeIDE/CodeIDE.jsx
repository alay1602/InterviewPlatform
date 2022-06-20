import React, { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import "./codeIDE.css"
const CodeIDE = () => {

 const code =useRef('');
 const input =useRef('');
 const output =useRef('');
 const [language,setLanguage]=useState('c++');
 

const setlang=(e)=>{
  setLanguage(e.target.value)

  
}
console.log(language)

const codesubmit= async(e)=>{
  e.preventDefault();

 const detail={
   code:code.current.value,
   language:language,
   input:input.current.value


 }
  try {
  
    const res=await axios.post("https://codex-api.herokuapp.com/",detail);
    console.log(res.data);
    output.current.value=res.data.output;
  } catch (error) {
    console.log(error);
  }
  
}

  return (
    <div className='container row w-100'>
        <form onSubmit={codesubmit} style={{"height":700.4+"px"}}>
            Code:<textarea className="w-100 h-75"  ref={code}></textarea>
            <select onChange={setlang}  >
              <option >cpp</option>
              <option >java</option>
              <option >py</option>
              <option>js</option>
              <option >c</option>
              <option >go</option>
              <option >cs</option>
            </select>
            <div className="container mt-2">
            Input:<textarea className="w-100 h-30"  ref={input}></textarea>
            </div>
           
            <button type='submit'>Execute</button>
        </form>

        Output:
        <textarea value={output.current.value} className="w-100 h-30"  ref={output}></textarea>
    </div>
  )
}

export default CodeIDE