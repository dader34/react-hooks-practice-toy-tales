import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys,setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addToy = (toy) =>{
    fetch("http://localhost:3001/toys",{
      method : "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(toy)
    })
    .then(resp => resp.json())
    .then(data => setToys(current => [...current,data]))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys}/>
    </>
  );
}

export default App;
