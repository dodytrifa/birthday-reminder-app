import React from "react";

const List = ({ people }) => {
  //we passing the props from List component
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        //we destructure it
        return (
          <article key={id} className="person">
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
