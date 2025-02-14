import React from "react";

function ToyForm({addToy}) {

  const handleSubmit = (e) =>{
    e.preventDefault()
    const newToy = {
      name:e.target[0].value,
      image:e.target[1].value,
      likes:0
    }
    addToy(newToy)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          required
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          required
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
