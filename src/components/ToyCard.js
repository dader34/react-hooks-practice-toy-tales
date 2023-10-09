import React, { useState } from "react";

function ToyCard({name,image,likes,id,removeToy}) {

  const [stateLikes,setStateLikes] = useState(likes)

  const handleLike = () =>{
    
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({likes : stateLikes + 1})
    })
    .then(resp => resp.json())
    .then(setStateLikes(current => current + 1))
  }

  const handleDonate = () =>{
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE"
    })
    .then(removeToy(id))
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{stateLikes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
