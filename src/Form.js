import React, { useState } from "react";

export default function Form(props) {
    
const [state, setstate] = useState("")
    console.log(state);
  return (
      <form onSubmit={(e) => { e.preventDefault(); props.handleFetch(state) }}>
      <input onChange={(e)=>setstate(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}