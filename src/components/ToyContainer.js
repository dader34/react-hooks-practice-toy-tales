import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys,setToys}) {

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(setToys)
  },[])

  const removeToy = (id) =>{
    const newToys = toys.filter(element =>{
      return element.id !== id
    })
    setToys(newToys)
  }

  const allToys = toys.map((element) =>{
    return (
      <ToyCard key={element.id} removeToy={removeToy} {...element}/>
    )
  })

  

  // console.log(toys)

  return (
    <div id="toy-collection">{allToys}</div>
  );
}

export default ToyContainer;
