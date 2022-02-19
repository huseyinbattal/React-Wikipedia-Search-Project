import React, { useState } from "react";
import Form from "./Form";
function App() {
  const [names, setnames] = useState([]);
  const [links, setlinks] = useState([]);
  const handleFetch = (param) => {
    console.log(param);
    fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&search=${param}&format=json&origin=*&limit=10`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setnames(data[1]);
        setlinks(data[3]);
      });
  };
  return (
    <div className="container">
      <h1>Wikipedia Search with Function Component</h1>
      <Form handleFetch={handleFetch} />
      <ul>
        {names.map((item,index) => (
          <li key={index}><a href={links[index]}>{item}</a></li>
        ))}
      </ul>
    </div>
  );
}
export default App;
